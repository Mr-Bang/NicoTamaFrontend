from flask import Flask
from flask_smorest import Api

from db import db

import models
import os
from models.hotel import HotelModel

from resources.hotel import blp as HotelBlueprint

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
        db.create_all()
        
        hotel1 = HotelModel(hotel_id=1 , name='DisneyHotel', description='greate hotel', longitude=14.55, latitude=16.31, image="https://m.media-amazon.com/images/I/51V680RSx2L._AC_SY445_.jpg", prefecture="千葉")
        db.session.add(hotel1)
        db.session.commit()

    api.register_blueprint(HotelBlueprint)


    return app
