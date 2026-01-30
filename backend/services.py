from datetime import datetime
from database import prices


def fetch_prices(product: str):
    data = [
        {
            "product": product,
            "platform": "Amazon",
            "price": 59999,
            "delivery": "2 days",
            "url": "https://amazon.in",
            "timestamp": datetime.utcnow()
        },
        {
            "product": product,
            "platform": "Flipkart",
            "price": 57999,
            "delivery": "3 days",
            "url": "https://flipkart.com",
            "timestamp": datetime.utcnow()
        },
        {
            "product": product,
            "platform": "Croma",
            "price": 58999,
            "delivery": "1 day",
            "url": "https://croma.com",
            "timestamp": datetime.utcnow()
        }
    ]

    # Optional: clear old snapshot for same product
    prices.delete_many({"product": product})

    prices.insert_many(data)

    return data


def compress_prices(data):
    cheapest = min(data, key=lambda x: x["price"])

    return {
        "best_deal": {
            "platform": cheapest["platform"],
            "price": cheapest["price"],
            "url": cheapest["url"],
            "delivery": cheapest["delivery"]
        },
        "all_prices": [
            {
                "platform": d["platform"],
                "price": d["price"],
                "delivery": d["delivery"],
                "url": d["url"]
            }
            for d in data
        ]
    }
