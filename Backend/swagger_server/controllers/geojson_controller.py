import connexion
import six

from .global_vars import ECOMP_DB

from swagger_server.models.geojson import Geojson  # noqa: E501
from swagger_server import util


def get_geo_json_by_id(campusId):  # noqa: E501
    """Find campus geojson by ID

    Returns a single campus geojson # noqa: E501

    :param campusId: ID of pet to return
    :type campusId: int

    :rtype: Geojson
    """
    return _stringify_object_id(ECOMP_DB.geojson.find({}))

def _stringify_object_id(result):
    stringified_result = []
    for element in result:
        element['_id'] = str(element['_id'])
        stringified_result.append(element)
    return stringified_result
