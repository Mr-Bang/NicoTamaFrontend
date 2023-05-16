from db import db
from sqlalchemy import ForeignKey

class ActivityModel(db.Model):
    __tablename__ = "activities"

    activity_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    price = db.Column(db.Integer)
    image = db.Column(db.String(240))
    longitude = db.Column(db.Float)
    latitude = db.Column(db.Float)
    category_id = db.Column(db.Integer, ForeignKey('categories.category_id'))
    description = db.Column(db.String(240))
    url = db.Column(db.String(240))
    region = db.Column(db.String(80),ForeignKey('hotels.region'))  # 都心、副都心、北部、南部、東部