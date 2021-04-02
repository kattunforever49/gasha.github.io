import pyrebase

config = {
    "apiKey": "AIzaSyDk4z6-2ESbbJAN1P46AVSdzMlNMY_JiOQ",
    "authDomain": "ruru-project-7d935.firebaseapp.com",
    "projectId": "ruru-project-7d935",
    "storageBucket": "ruru-project-7d935.appspot.com",
    "messagingSenderId": "268479282619",
    "appId": "1:268479282619:web:950d26c41326e763a4589e",
    "databaseURL" : "https://ruru-project-7d935-default-rtdb.firebaseio.com/"
}

firebase = pyrebase.initialize_app(config)

db = firebase.database()
db.child('ruru').child('point').set(0)


from flask import *

app = Flask(__name__)

@app.route('/Ruru', methods=['GET', 'POST'])
def basic():
    to = db.child('ruru').child('point').get()
    return render_template('ruru.html', t=to.val())

@app.route('/')
def index():
    return redirect(url_for('basic'))

if __name__ == '__main__':
    app.run(debug=True)