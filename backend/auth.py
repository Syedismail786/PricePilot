from database import users
from utils import hash_password, verify_password, create_token
from fastapi import HTTPException


# ---------------- SIGNUP ----------------

def register_user(name: str, email: str, password: str, phone: str):

    existing = users.find_one({"email": email})
    if existing:
        raise HTTPException(status_code=400, detail="User already exists")

    users.insert_one({
        "name": name,
        "email": email.lower(),
        "password": hash_password(password),
        "phone": phone
    })

    return {
        "success": True,
        "message": "Signup successful"
    }


# ---------------- LOGIN ----------------

def login_user(email: str, password: str):

    user = users.find_one({"email": email.lower()})

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if not verify_password(password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid password")

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
