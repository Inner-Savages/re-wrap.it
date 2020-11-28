from flask import (Flask, render_template)
from flask import request
from flask import Response
from flask_sqlalchemy import SQLAlchemy
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.sqlite3'
db = SQLAlchemy(app)
CORS(app)


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


@app.route('/')
def hello_world():
    return render_template("index.html")


@app.route('/api/subject', methods=['GET', 'PUT'])
def subject():
    if request.method == 'GET':
        return jsonify([i.serialize for i in Subject.query.all()])
    if request.method == 'POST':
        # TODO: you should validate things
        my_subject = Subject(
            name=request.form['name'],
            address_text=request.form['address_text'],
            address_latitude=request.form['address_latitude'],
            address_longitude=request.form['address_longitude'],
            contact_info=request.form['contact_info']
        )
        db.session.add(my_subject)
        db.session.commit()  # TODO: we should check if we've succeeded, but fuck it
        return Response("{'status':'created'}", status=201, mimetype='application/json')
    #if request.method == 'DELETE':


@app.route('/api/dupaslonia', methods=['GET'])
def dupaslonia():
    return jsonify({"alamakota": "test"})


if __name__ == "__main__":
    app.run()
