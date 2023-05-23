from db import db


class RoomModel(db.Model):
    __tablename__ = "rooms"
    
    room_id = db.Column(db.Integer, primary_key=True)
    hotel_id = db.Column(db.Integer, db.ForeignKey("hotels.hotel_id"), nullable=False)
    room_type = db.Column(db.String)
    price = db.Column(db.Integer, nullable=False)
    available = db.Column(db.Boolean, nullable=False)
    image = db.Column(db.String(240))
    hotel = db.relationship("HotelModel", back_populates="rooms")
