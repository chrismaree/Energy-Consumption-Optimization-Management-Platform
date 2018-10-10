import connexion
import six

from .global_vars import ECOMP_DB

# from swagger_server.models.building_information import BuildingInformation  # noqa: E501
# from swagger_server.models.campus import Campus  # noqa: E501
from swagger_server import util


def get_building_info_by_id(buildingId):  # noqa: E501
    """Find building by id

    Returns a single campus geojson # noqa: E501

    :param buildingId: ID of campus to return geojson for
    :type buildingId: int

    :rtype: BuildingInformation
    """
    print("HIT BOI")
    print(buildingId)
    return _stringify_object_id(ECOMP_DB.buildingInformation.find({"BuildingId": buildingId}))


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
