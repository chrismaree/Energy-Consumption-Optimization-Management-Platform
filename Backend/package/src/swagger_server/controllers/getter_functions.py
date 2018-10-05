from .global_vars import IDB


def _get_student_by_id(university_name, _id):
    result = IDB[university_name].find_one({'_id': _id})
    if result:
        result['_id'] = str(result['_id'])
        return result
    else:
        return {'ERROR': 'No matching data found.'}, 409

def _bulk_get_students_by_id(university_name, _ids):
    students = dict()
    for _id in _ids:
        students[_id] = _get_student_by_id(university_name, _id)
    return students

def _get_students_by_trait(university_name, trait, value):
    result = list(IDB[university_name].find({trait: value}))
    if result:
        return _stringify_object_id(result)
    else:
        return {'ERROR': 'No matching data found.'}, 409

def _get_students_by_trait_regex(university_name, trait, regex):
    result = list(IDB[university_name].find({trait: {"$regex": ".*"+regex+".*"}}))
    if result:
        return _stringify_object_id(result)
    else:
        return {'ERROR': 'No matching data found.'}, 409

def _get_all_students(university_name):
    result = list(IDB[university_name].find({}))
    if result:
        return _stringify_object_id(result)
    else:
        return {'ERROR': 'No matching data found.'}, 409

def _stringify_object_id(result):
    stringified_result = []
    for element in result:
        element['_id'] = str(element['_id'])
        stringified_result.append(element)
    return stringified_result
