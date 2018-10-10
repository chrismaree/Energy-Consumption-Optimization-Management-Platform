from pymongo import MongoClient

client = MongoClient('mongodb://mongodb:27017/')
ECOMP_DB = client.witsECOMP
