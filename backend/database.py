from pymongo import MongoClient

# Mongo connection (Docker-safe, also works locally if mongo is running)
client = MongoClient("mongodb://mongo:27017")


db = client["Price_Compression_App"]

# collections
users = db["users"]
prices = db["prices"]
products_collection = db["Product"]

