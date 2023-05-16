from flask import request
from flask.views import MethodView
from flask_smorest import Blueprint, abort
from sqlalchemy import or_
from sqlalchemy.exc import SQLAlchemyError, IntegrityError
from schemas import ActivitySchema, SearchSchema

from models import ActivityModel

from db import db

blp = Blueprint("Activities", "activities", description="Operations on activities")


@blp.route("/activity/<string:activity_id>")
class activity(MethodView):
    @blp.response(200, ActivitySchema(many=True))
    def get(self, activity_id):
        activity = ActivityModel.query.get_or_404(activity_id)
        return str(activity)


@blp.route("/activity")
class ActivityList(MethodView):
    @blp.response(200, ActivitySchema(many=True))
    def get(self):
        return ActivityModel.query.all()

    @blp.arguments(ActivitySchema)
    @blp.response(201, ActivitySchema)
    def post(self, activity_data):
        activity = ActivityModel(**activity_data)

        try:
            db.session.add(activity)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message="An error occurred while inserting the activity.")

        return activity


@blp.route("/activity/search")
@blp.arguments(SearchSchema)
@blp.response(200, ActivitySchema(many=True))
def get(self):
    search_word: str = request.get_json()["search_word"]
    activities = ActivityModel.query.filter( ActivityModel.region == search_word).all()
    return activities