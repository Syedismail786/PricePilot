from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")

db = client["Price_Compression_App"]

# collections
users = db["users"]
prices = db["prices"]
products_collection = db["Product"]
