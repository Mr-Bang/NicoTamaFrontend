from flask import request
from flask.views import MethodView
from flask_smorest import Blueprint, abort
from sqlalchemy import or_
from sqlalchemy.exc import SQLAlchemyError, IntegrityError
from schemas import CategorySchema, SearchSchema

from models import CategoryModel

from db import db

blp = Blueprint("Categories", "categories", description="Operations on categories")
@blp.route("/category/<string:category_id>")
class category(MethodView):
    @blp.response(200, CategorySchema(many=True))
    def get(self, category_id):
        category = CategoryModel.query.get_or_404(category_id)
        return str(category)


@blp.route("/category")
class CategoryList(MethodView):
    @blp.response(200, CategorySchema(many=True))
    def get(self):
        return CategoryModel.query.all()

    # @blp.arguments(CategorySchema)
    # @blp.response(201, CategorySchema)
    # def post(self, category_data):
    #     category = CategoryModel(**category_data)
    #
    #     try:
    #         db.session.add(category)
    #         db.session.commit()
    #     except SQLAlchemyError:
    #         abort(500, message="An error occurred while inserting the category.")
    #
    #     return category