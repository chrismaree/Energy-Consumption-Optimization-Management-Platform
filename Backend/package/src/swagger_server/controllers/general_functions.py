import hashlib
import json
import random
import time

def _generate_id(student_data):
    t = time.time()
    r = random.randint(1,101)
    student_string = json.dumps(student_data)
    hash_object = hashlib.sha256((student_string + str(t) + str(r)).encode())
    student_data['_id'] = hash_object.hexdigest()
    return student_data