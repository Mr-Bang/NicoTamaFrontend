from db import db
from sqlalchemy import ForeignKey

class CategoryModel(db.Model):
    __tablename__ = "categories"

    category_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)