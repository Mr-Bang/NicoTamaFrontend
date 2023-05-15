from db import db
from sqlalchemy import ForeignKey

class ActivityModel(db.Model):
    __tablename__ = "hotels"

    hotel_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    description = db.Column(db.String(240))
    longitude = db.Column(db.Float)
    latitude = db.Column(db.Float)
    image = db.Column(db.String(240))
    region = db.Column(db.String(80)) # 都心、副都心、北部、南部、東部
