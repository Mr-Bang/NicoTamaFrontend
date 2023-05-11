import uuid
from flask import request
from flask.views import MethodView
from flask_smorest import Blueprint, abort
from sqlalchemy.exc import SQLAlchemyError


from db import db
from models.hotel import HotelModel

blp = Blueprint("Hotels", "hotels", description="Operations on hotels")


@blp.route("/hotel")
class Hotel(MethodView):
    def get(self):
        try:
            return "hello"
        except KeyError:
            abort(404, message="Hotel not found.")
