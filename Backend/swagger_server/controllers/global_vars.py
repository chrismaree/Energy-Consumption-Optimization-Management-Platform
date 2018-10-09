from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
ECOMP_DB = client.witsECOMP
