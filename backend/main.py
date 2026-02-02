from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from urllib.parse import unquote

from auth import register_user, login_user
from models import SignupRequest, LoginRequest
from database import products_collection   # ✅ use shared DB connection

# ---------------- APP ----------------

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- AUTH ----------------

@app.post("/signup")
def signup(data: SignupRequest):
    return register_user(
        data.name,
        data.email,
        data.password,
        data.phone
    )

@app.post("/login")
def login(data: LoginRequest):
    return login_user(data.email, data.password)

# ---------------- PRODUCTS ----------------

@app.get("/products")
def get_all_products():
    return list(products_collection.find({}, {"_id": 0}))


@app.get("/products/{category}")
def get_by_category(category: str):
    category = unquote(category)

    return list(
        products_collection.find(
            {"category": {"$regex": f"^{category}$", "$options": "i"}},
            {"_id": 0}
        )
    )


@app.get("/products/search/{query}")
def search_products(query: str):
    query = unquote(query)

    return list(
        products_collection.find(
            {"name": {"$regex": query, "$options": "i"}},
            {"_id": 0}
        )
    )

# ---------------- COMPARE ----------------

@app.get("/compare/{product}")
def compare(product: str):
    product = unquote(product)

    item = products_collection.find_one(
        {"name": {"$regex": f".*{product}.*", "$options": "i"}},
        {"_id": 0}
    )

    if not item:
        raise HTTPException(404, "Product not found")

    return item
