from .global_vars import IDB

def _delete_student_entry(university_name, _id):
    doc = IDB[university_name].find_one({"_id": _id})
    if doc:
        IDB[university_name].delete_one({"_id": _id})
        return True
    else:
        return {'ERROR': 'No matching document id.'}, 409