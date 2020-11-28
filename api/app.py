import sqlalchemy
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_json import FlaskJSON, json_response
from flask_restful import reqparse, Api, Resource
from flasgger import Swagger, swag_from

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.sqlite3'
api = Api(app)
db = SQLAlchemy(app)
CORS(app)
json = FlaskJSON(app)

# Create an APISpec
template = {
  "swagger": "2.0",
  "info": {
    "title": "re-wrap.it API",
    "description": "Desc",
    "version": "0.1.0",
    "contact": {
      "name": "q84fh",
      "url": "https://q84fh.net/",
    }
  }
}

app.config['SWAGGER'] = {
    'title': 're-wrap.it API',
    'uiversion': 3,
    "specs_route": "/api/docs/",
    'doc_dir': './docs/'
}
swagger = Swagger(app, template=template)


class Demand(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    owner = db.Column(db.Integer)
    item_name = db.Column(db.String)
    item_count = db.Column(db.Integer)
    direction_give = db.Column(db.Integer)
    item_type = db.Column(db.String)
    item_condition = db.Column(db.String)
    what_in_exchange = db.Column(db.String)

    def __repr__(self):
        return '<Demand %r>' % self.name

    @property
    def serialize(self):
        """Return object data in easily serializable format"""
        return {
            'id': self.id,
            'owner': self.owner,
            'item_name': self.item_name,
            'item_count': self.item_count,
            'direction_give': self. direction_give,
            'item_type': self.item_type,
            'item_condition': self.item_condition,
            'what_in_exchange': self.what_in_exchange
        }


class Subject(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.Text, unique=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    address_text = db.Column(db.String(80), unique=False, nullable=False)
    address_latitude = db.Column(db.Float, unique=False, nullable=False)
    address_longitude = db.Column(db.Float, unique=False, nullable=False)
    contact_info = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return '<Subject %r>' % self.email

    @property
    def serialize(self):
        """Return object data in easily serializable format"""
        return {
            'id': self.id,
            'email': self.email,
            'name': self.name,
            'address_text': self.address_text,
            'address_latitude': self.address_latitude,
            'address_longitude': self.address_longitude,
            'contact_info': self.contact_info,
        }


@api.resource('/api/subject', '/api/subject/')
class SubjectListResource(Resource):
    @swag_from("docs/SubjectResource/get.yml")
    def get(self):
        return json_response(status_=200, message="OK", data=[i.serialize for i in Subject.query.all()])

    @swag_from("docs/SubjectResource/post.yml")
    def post(self):
        # TODO: you should validate things but fuck it
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, help='Name of subject')
        parser.add_argument('email', type=str, help='E-mail of subject')
        parser.add_argument('address_text', type=str, help='Address of subject')
        parser.add_argument('address_latitude', type=float, help='Geolocations of subject: latitude')
        parser.add_argument('address_longitude', type=float, help='Geolocations of subject: longitude')
        parser.add_argument('contact_info', type=str, help='Contact information')
        args = parser.parse_args(strict=True)

        my_subject = Subject(
            name=args['name'],
            email=args['email'],
            address_text=args['address_text'],
            address_latitude=args['address_latitude'],
            address_longitude=args['address_longitude'],
            contact_info=args['contact_info']
        )
        try:
            db.session.add(my_subject)
            db.session.commit()  # TODO: we should check if we've succeeded, but fuck it
        except sqlalchemy.exc.IntegrityError as e:
            return json_response(status_=409, message="Conflict", data=my_subject.serialize, exception=str(e))
        return json_response(status_=201, message="Created", data=my_subject.serialize)


@api.resource('/api/subject/<subject_id>')
class SubjectResource(Resource):
    @swag_from("docs/SubjectResource/get.yml")
    def get(self, subject_id=None):
        try:
            tmp = int(subject_id)
            my_subject = Subject.query.get(subject_id)
        except ValueError:
            my_subject = Subject.query.filter_by(email=subject_id).first()
        if my_subject:
            return json_response(status_=200, message="OK", data=my_subject.serialize)
        else:
            return json_response(status_=404, message="Not Found")

    @swag_from("docs/SubjectResource/delete.yml")
    def delete(self, subject_id=None):
        try:
            tmp = int(subject_id)
            my_subject = Subject.query.get(subject_id)
        except ValueError:
            my_subject = Subject.query.filter_by(email=subject_id).first()
        if my_subject:
            db.session.delete(my_subject)
            db.session.commit()
            return json_response(status_=200, message="Deleted")
        else:
            return json_response(status_=404, message="Not Found")


@api.resource('/api/giveaway', '/api/giveaway/')
class GiveawayListResource(Resource):
    def get(self):
        return json_response(status_=200, message="OK", data=[i.serialize for i in Demand.query.all()])

    def post(self):
        # TODO: you should validate things but fuck it
        parser = reqparse.RequestParser()
        parser.add_argument('owner', type=int, help='Id of subject')
        parser.add_argument('item_name', type=str, help='')
        parser.add_argument('item_count', type=int, help='How many items you have/willing to take')
        parser.add_argument('item_type', type=str, help='What kind of item is this?')
        parser.add_argument('item_condition', type=str, help='What is a condition of item')
        parser.add_argument('what_in_exchange', type=str, help='What you expect in exchange (can be nothing -> null)')
        args = parser.parse_args(strict=True)

        my_demand = Demand(
            owner=args['owner'],
            item_name=args['item_name'],
            item_count=args['item_count'],
            direction_give=1,
            item_type=args['item_type'],
            item_condition=args['item_condition'],
            what_in_exchange=args['what_in_exchange']
        )
        db.session.add(my_demand)
        db.session.commit()  # TODO: we should check if we've succeeded, but fuck it
        return json_response(status_=201, message="Created", data=my_demand.serialize)


@api.resource('/api/giveaway/<int:subject_id>')
class GiveawayResource(Resource):
    def get(self, demand_id=None):
        if demand_id:
            my_demand = Demand.query.get(demand_id)
            if my_demand:
                return json_response(status_=200, message="OK", data=Demand.query.get(demand_id).serialize)
            else:
                return json_response(status_=404, message="Not Found")
        else:
            return json_response(status_=404, message="Not Found")

    @swag_from("docs/DemandResource/delete.yml")
    def delete(self, subject_id=None):
        my_demand = Demand.query.get(subject_id)
        if my_demand:
            db.session.delete(my_demand)
            db.session.commit()
            return json_response(status_=200, message="Deleted")
        else:
            return json_response(status_=404, message="Not Found")


if __name__ == "__main__":
    app.run()
