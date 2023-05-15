from marshmallow import Schema, fields



class HotelSchema(Schema):
    hotel_id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    description = fields.Str(required=False)
    longitude = fields.Float(required=True)
    latitude = fields.Float(required=True)
    image = fields.Str(required=False)
    region = fields.Str(required=False)


class PlainStoreSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str()



class HotelUpdateSchema(Schema):
    name = fields.Str()
    price = fields.Float()

    
class SearchShema(Schema):
    search_word = fields.Str(required=True)
