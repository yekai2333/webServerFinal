from main import db

class User(db.Model):
    __tablename__="student"
    id=db.Column(db.Integer,primary_key=True,autoincrement=True)
    username=db.Column(db.String(20),nullable=False)
    password=db.Column(db.String(50),nullable=False)
    name=db.Column(db.String(20))

    def getOne(self):
        user=User.query.filter_by(id=3)[0]
        return user