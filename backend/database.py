from pymongo import MongoClient

# Local MongoDB (where your real data exists)
MONGO_URL = "mongodb://127.0.0.1:27017"

client = MongoClient(MONGO_URL)

# Database
db = client["Price_Compression_App"]

# Collections
users = db["users"]
products_collection = db["Product"]
