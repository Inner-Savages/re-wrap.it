from flask import (Flask, request)
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_json import FlaskJSON, JsonError, json_response, as_json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.sqlite3'
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


@app.route('/api/subject/', methods=['GET', 'POST'])
@app.route('/api/subject/<int:subject_id>', methods=['DELETE','GET'])
def subject(subject_id=None):
    if request.method == 'GET':
        if subject_id:
            my_subject = Subject.query.get(subject_id)
            if my_subject:
                return json_response(status_=200, message="OK", data=Subject.query.get(subject_id).serialize)
            else:
                return json_response(status_=404, message="Not Found")
        else:
            return json_response(status_=200, message="OK", data=[i.serialize for i in Subject.query.all()])

    if request.method == 'POST':
        # TODO: you should validate things but fuck it
        my_subject = Subject(
            name=request.form['name'],
            address_text=request.form['address_text'],
            address_latitude=request.form['address_latitude'],
            address_longitude=request.form['address_longitude'],
            contact_info=request.form['contact_info']
        )
        db.session.add(my_subject)
        db.session.commit()  # TODO: we should check if we've succeeded, but fuck it
        return json_response(status_=201, message="Created", data=my_subject.serialize)

    if request.method == 'DELETE':
        my_subject = Subject.query.get(subject_id)
        if my_subject:
            db.session.delete(my_subject)
            db.session.commit()
            return json_response(status_=200, message="Deleted")
        else:
            return json_response(status_=404, message="Not Found")


if __name__ == "__main__":
    app.run()
