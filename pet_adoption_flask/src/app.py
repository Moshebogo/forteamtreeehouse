from flask import (Flask, url_for, request, render_template)
from models import db, Pet, app
from flask_migrate import Migrate

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add-pet', methods=['GET', 'POST'])
def add_pet():
    if request.form:
        print(request.form)
        new_pet = Pet(name=request.form['name'], age=request.form['age'],
                      breed=request.form['breed'], color=request.form['color'],
                      size=request.form['size'], weight=request.form['weight'],
                      url=request.form['url'], url_tag=request.form['alt'],
                      pet_type=request.form['pet'], gender=request.form['gender'],
                      spay=request.form['spay'], house_trained=request.form['housetrained'],
                      description=request.form['description'])
        db.session.add(new_pet)
        db.session.commit()
        return render_template('index.html')
    return render_template('add-pet.html')

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True, port=8000, host='127.0.0.1')