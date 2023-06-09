from flask import request
from flask.views import MethodView
from flask_smorest import Blueprint, abort
from sqlalchemy import or_
from sqlalchemy.exc import SQLAlchemyError, IntegrityError
from schemas import HotelSchema, SearchSchema

from models import HotelModel, ActivityModel

from db import db


blp = Blueprint("Hotels", "hotels", description="Operations on hotels")


@blp.route("/hotel/<string:hotel_id>")
class Hotel(MethodView):
    @blp.response(200, HotelSchema(many=True))
    def get(self, hotel_id):
        hotel = HotelModel.query.get_or_404(hotel_id)
        return str(hotel)

@blp.route("/hotel")
class HotelList(MethodView):
    @blp.response(200, HotelSchema(many=True))
    def get(self):
        return HotelModel.query.all()
    
    @blp.arguments(HotelSchema)
    @blp.response(201, HotelSchema)
    def post(self, hotel_data):
        hotel = HotelModel(**hotel_data)

        try:
            db.session.add(hotel)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message="An error occurred while inserting the hotel.")

        return hotel
    
@blp.route("/search")
@blp.arguments(SearchSchema)
@blp.response(200, HotelSchema(many=True))
def get(self):
    search_word : str = request.get_json()["search_word"]
    hotels = HotelModel.query.filter(or_(HotelModel.name.contains(search_word), HotelModel.region == search_word)).all()
    return hotels
    

