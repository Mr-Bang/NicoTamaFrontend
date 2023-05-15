from flask import Flask
from flask_smorest import Api

from db import db

import os
from models import HotelModel
from resources.hotel import blp as HotelBlueprint

def hotel_create():
    # テストデータ
    from data import hotels
    for hotel in hotels:
        inserthotel = HotelModel(name=hotel["name"], longitude=hotel["longitude"], latitude=hotel["latitude"], image=hotel["image"], region=hotel["region"])
        db.session.add(inserthotel)

def create_app(db_url=None):
    app = Flask(__name__)
    app.config["PROPAGATE_EXCEPTIONS"] = True
    app.config["API_TITLE"] = "Hotels REST API"
    app.config["API_VERSION"] = "v1"
    app.config["OPENAPI_VERSION"] = "3.0.3"
    app.config["OPENAPI_URL_PREFIX"] = "/"
    app.config["OPENAPI_SWAGGER_UI_PATH"] = "/swagger-ui"
    app.config[
        "OPENAPI_SWAGGER_UI_URL"
    ] = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"
    
    app.config["SQLALCHEMY_DATABASE_URI"] = db_url or os.getenv("DATABASE_URL", "sqlite:///data.db")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.init_app(app)
    api = Api(app)

    with app.app_context():
        db.drop_all()
        db.create_all()
        hotel_create()
        db.session.commit()
        
    api.register_blueprint(HotelBlueprint)
    
    return app

    
