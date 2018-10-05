import mock
import pytest

from src.swagger_server.controllers.general_functions import _generate_id


@mock.patch('time.time')
@mock.patch('random.randint')
def test_generate_id(random, time):
    time.return_value = 12345
    random.return_value = 1
    student_data = {'name': 'John'}
    exected_output = {'name': 'John', '_id': '65f27ef9dab14779fc7b332a77733be17194ee4c5ed1d50dd4658b2a5d7e5504'}
    assert (_generate_id(student_data) == exected_output)
