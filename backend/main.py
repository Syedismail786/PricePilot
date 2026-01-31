from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from auth import register_user, login_user
from models import SignupRequest, LoginRequest
from services import fetch_prices, compress_prices

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- AUTH ----------

@app.post("/signup")
def signup(data: SignupRequest):
    result = register_user(
        data.name,
        data.email,
        data.password,
        data.phone
    )

    if not result["success"]:
        raise HTTPException(status_code=400, detail=result["message"])

    return result


@app.post("/login")
def login(data: LoginRequest):
    result = login_user(data.email, data.password)

    if not result["success"]:
        raise HTTPException(status_code=400, detail=result["message"])

    return result


# ---------- PRICE COMPARISON ----------

@app.get("/compare/{product}")
def compare(product: str):

    raw_prices = fetch_prices(product)

    if not raw_prices:
        raise HTTPException(status_code=404, detail="Product not found")

    return compress_prices(raw_prices)
from database import products_collection

# ✅ GET ALL PRODUCTS (Big Deals)
@app.get("/products")
def get_all_products():
    products = list(products_collection.find({}, {"_id": 0}))
    return products


# ✅ GET BY CATEGORY
@app.get("/products/{category}")
def get_by_category(category: str):
    products = list(
        products_collection.find(
            {"category": category},
            {"_id": 0}
        )
    )
    return products
@app.get("/products/search/{query}")
def search_products(query: str):
    products = list(
        products_collection.find(
            {"name": {"$regex": query, "$options": "i"}},
            {"_id": 0}
        )
    )
    return products

