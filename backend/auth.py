from database import users
from utils import hash_password, verify_password, create_token

def register_user(name, email, password, phone):
    if users.find_one({"email": email}):
        return {"success": False, "message": "User already exists"}

    users.insert_one({
        "name": name,
        "email": email,
        "password": hash_password(password),
        "phone": phone
    })

    return {"success": True, "message": "Signup successful"}

def login_user(email, password):
    user = users.find_one({"email": email})
    if not user:
        return {"success": False, "message": "User not found"}

    if not verify_password(password, user["password"]):
        return {"success": False, "message": "Invalid password"}

    token = create_token({"email": user["email"]})

    return {
        "success": True,
        "token": token,
        "user": {
            "name": user["name"],
            "email": user["email"],
            "phone": user["phone"]
        }
    }
