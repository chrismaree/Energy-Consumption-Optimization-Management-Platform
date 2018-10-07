import connexion
import six

from .global_vars import ECOMP_DB

from swagger_server.models.campus import Campus  # noqa: E501
from swagger_server import util


def get_campus_information():  # noqa: E501
    """Return information on all campus

    Key information for each campus # noqa: E501

    :rtype: Campus
    """
    return _stringify_object_id(ECOMP_DB.campusInfo.find({}))

def _stringify_object_id(result):
    stringified_result = []
    for element in result:
        element['_id'] = str(element['_id'])
        stringified_result.append(element)
    return stringified_result
