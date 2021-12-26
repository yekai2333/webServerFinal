from main import app
from flask import render_template,jsonify
from Model.User import User
from Service.SystemService import *

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get")
def get():
    data=getSys()
    return jsonify(data)

@app.route("/log")
def log():
    data=getLog()
    return jsonify(data)

@app.route("/nginx")
def nginx():
    data=getNginx()
    return jsonify(data)