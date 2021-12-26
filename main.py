from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)
class Config:
    SQLALCHEMY_DATABASE_URI="mysql+pymysql://root:pujiahui@localhost:3333/demo?charset=utf8"
    SQLALCHEMY_TRACK_MODIFICATIONS=True
app.config.from_object(Config)
db=SQLAlchemy(app)

from Controller.PageController import *

if __name__ == '__main__':
    app.run(host="127.0.0.1",port=5000)