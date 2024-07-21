from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy #SQLAlchemy allows devs to access/manage db using python
 


app = Flask(__name__) #create instance of app 

@app.route("/") #route decorator to tell flask which URL triggers our function 
def hello_world(): #function returns the message we want to display in the user's browser 
    return render_template('index.html')