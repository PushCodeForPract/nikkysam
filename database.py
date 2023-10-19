from flask import Flask, render_template, request, redirect
import mysql.connector
import mysql


app = Flask(__name__)

# Establish a connection to the database
mydb = mysql.connector.connect(
    host="203.109.124.70",
    user="root",
    password="Shanto@001",
    database="test"
)
# Check if the database connection is successful
if mydb.is_connected():
    print("Database connected successfully!")
else:
    print("Database connection failed!")

cursor = mydb.cursor()

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/fetch')
def fetch():
    return render_template('otdasboard.html')


if __name__ == '__main__':
    app.run()
