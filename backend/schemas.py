from marshmallow import Schema, fields



class HotelSchema(Schema):
    hotel_id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    description = fields.Str(required=False)
    longitude = fields.Float(required=True)
    latitude = fields.Float(required=True)
    image = fields.Str(required=False)
    region = fields.Str(required=False)

class ActivitySchema(Schema):
    activity_id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    price = fields.Int(required=True)
    image = fields.Str(required=False)
    longitude = fields.Float(required=True)
    latitude = fields.Float(required=True)
    category_id = fields.Int(dump_only=True)
    description = fields.Str(required=False)
    url = fields.Str(required=True)
    region = fields.Str(required=False)


class PlainStoreSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str()



class HotelUpdateSchema(Schema):
    name = fields.Str()
    price = fields.Float()

    
class SearchSchema(Schema):
    search_word = fields.Str(required=True)
