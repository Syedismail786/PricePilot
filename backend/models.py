from pydantic import BaseModel, EmailStr

class SignupRequest(BaseModel):
    name: str
    email: EmailStr
    password: str
    phone: str

class LoginRequest(BaseModel):
    email: EmailStr
    password: str
from pydantic import BaseModel

class Product(BaseModel):
    name: str
    category: str
    amazon_price: float
    flipkart_price: float
    amazon_link: str
    flipkart_link: str
    image: str
