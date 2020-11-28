from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_json import FlaskJSON, json_response
from flask_restful import reqparse, Api, Resource

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.sqlite3'
api = Api(app)
db = SQLAlchemy(app)
CORS(app)
json = FlaskJSON(app)


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


class SubjectResource(Resource):
    def get(self,subject_id=None):
        if subject_id:
            my_subject = Subject.query.get(subject_id)
            if my_subject:
                return json_response(status_=200, message="OK", data=Subject.query.get(subject_id).serialize)
            else:
                return json_response(status_=404, message="Not Found")
        else:
            return json_response(status_=200, message="OK", data=[i.serialize for i in Subject.query.all()])

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

    def delete(self,subject_id=None):
        my_subject = Subject.query.get(subject_id)
        if my_subject:
            db.session.delete(my_subject)
            db.session.commit()
            return json_response(status_=200, message="Deleted")
        else:
            return json_response(status_=404, message="Not Found")


api.add_resource(SubjectResource, '/api/subject', '/api/subject/<int:subject_id>')

if __name__ == "__main__":
    app.run()
