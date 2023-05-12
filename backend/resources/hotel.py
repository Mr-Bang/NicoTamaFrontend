from flask.views import MethodView
from flask_smorest import Blueprint, abort
from sqlalchemy.exc import SQLAlchemyError, IntegrityError

from models import HotelModel

from db import db


blp = Blueprint("Hotels", "hotels", description="Operations on hotels")


@blp.route("/hotel")
class Hotel(MethodView):
    def get(self):
        try:
            return "hello"
        except KeyError:
            abort(404, message="Hotel not found.")
