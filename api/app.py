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


class Subject(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    address_text = db.Column(db.String(80), unique=False, nullable=False)
    address_latitude = db.Column(db.Float, unique=False, nullable=False)
    address_longitude = db.Column(db.Float, unique=False, nullable=False)
    contact_info = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return '<Subject %r>' % self.name

    @property
    def serialize(self):
        """Return object data in easily serializable format"""
        return {
            'id': self.id,
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
        parser.add_argument('address_text', type=str, help='Address of subject')
        parser.add_argument('address_latitude', type=float, help='Geolocations of subject: latitude')
        parser.add_argument('address_longitude', type=float, help='Geolocations of subject: longitude')
        parser.add_argument('contact_info', type=str, help='Contact information')
        args = parser.parse_args(strict=True)

        my_subject = Subject(
            name=args['name'],
            address_text=args['address_text'],
            address_latitude=args['address_latitude'],
            address_longitude=args['address_longitude'],
            contact_info=args['contact_info']
        )
        db.session.add(my_subject)
        db.session.commit()  # TODO: we should check if we've succeeded, but fuck it
        return json_response(status_=201, message="Created", data=my_subject.serialize)

@api.resource('/api/subject/<int:subject_id>')
class SubjectResource(Resource):
    @swag_from("docs/SubjectResource/get.yml")
    def get(self, subject_id=None):
        if subject_id:
            my_subject = Subject.query.get(subject_id)
            if my_subject:
                return json_response(status_=200, message="OK", data=Subject.query.get(subject_id).serialize)
            else:
                return json_response(status_=404, message="Not Found")
        else:
            return json_response(status_=404, message="Not Found")

    @swag_from("docs/SubjectResource/delete.yml")
    def delete(self, subject_id=None):
        my_subject = Subject.query.get(subject_id)
        if my_subject:
            db.session.delete(my_subject)
            db.session.commit()
            return json_response(status_=200, message="Deleted")
        else:
            return json_response(status_=404, message="Not Found")


if __name__ == "__main__":
    app.run()
