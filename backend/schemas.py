from marshmallow import Schema, fields



class HotelSchema(Schema):
    hotel_id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    description = fields.Str(required=False)
    longitude = fields.Float(required=True)
    latitude = fields.Float(required=True)
    image = fields.Str(required=False)
    prefecture = fields.Str(required=False)


class PlainStoreSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str()



class HotelUpdateSchema(Schema):
    name = fields.Str()
    price = fields.Float()


class StoreSchema(PlainStoreSchema):
    items = fields.List(fields.Nested(HotelSchema()), dump_only=True)
