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
    amazonPrice: float
    flipkartPrice: float
    amazonLink: str
    flipkartLink: str
    image: str
