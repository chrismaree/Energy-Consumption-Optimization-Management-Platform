# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.geojson import Geojson  # noqa: E501
from swagger_server.test import BaseTestCase


class TestGeojsonController(BaseTestCase):
    """GeojsonController integration test stubs"""

    def test_get_geo_json_by_id(self):
        """Test case for get_geo_json_by_id

        Find campus geojson by ID
        """
        response = self.client.open(
            '/v2/geojson/{campusId}'.format(campusId=789),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
