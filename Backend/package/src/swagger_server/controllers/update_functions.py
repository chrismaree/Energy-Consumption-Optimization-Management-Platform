from .global_vars import IDB
from .general_functions import _generate_id

def _update_id(university_name, _id):
    doc = IDB[university_name].find_one({"_id": _id})
    if doc:
        doc = _generate_id(doc)
        IDB[university_name].insert_one(doc)
        IDB[university_name].delete_one({"_id": _id})
        return {'new_id': str(doc['_id'])}
    else:
        return {'ERROR': 'No matching document id.'}, 409

def _update_trait(university_name, trait, value, _id):
    IDB[university_name].update_one({'_id': _id}, {"$set": {trait: value}}, upsert=False)
    doc = IDB[university_name].find_one({"_id": _id})
    if doc:
        doc['_id'] = str(doc['_id'])
        return doc
    else:
        return {'ERROR': 'No matching document id.'}, 409