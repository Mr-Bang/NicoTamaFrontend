from flask import app, request
from flask.views import MethodView
from flask_smorest import Blueprint, abort
from sqlalchemy import or_
from sqlalchemy.exc import SQLAlchemyError, IntegrityError
from schemas import RoomGetShema, RoomSchema

import logging

from models import RoomModel

from db import db


blp = Blueprint("Rooms", "rooms", description="Operations on rooms")

    
@blp.route("/room")
class RoomList(MethodView):

    @blp.arguments(RoomSchema)
    @blp.response(201, RoomSchema)
    def post(self, room_data):
        room = RoomModel(**room_data)
        logging.info(room)
        try:
            db.session.add(room)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message="An error occurred while inserting the hotel.")

        return room

@blp.route("/room")
@blp.arguments(RoomGetShema)
@blp.response(200, RoomSchema(many=True))
def get(self):
    hotel_id : int = request.get_json()["hotel_id"]
    rooms = RoomModel.query.filter(RoomModel.hotel_id == hotel_id).all()
    return rooms