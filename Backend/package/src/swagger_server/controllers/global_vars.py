from pymongo import MongoClient

client = MongoClient('mongodb://mongodb:27017/')
IDB = client.identifying_database