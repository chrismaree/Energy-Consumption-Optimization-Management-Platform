from pymongo import MongoClient

client = MongoClient('localhost', 27017)
ECOMP_DB = client.witsECOMP
