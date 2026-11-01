from flask import Flask, jsonify
import requests
from flask_cors import CORS
app=Flask(__name__)

CORS(app,origins=["http://localhost:3000","http://127.0.0.1:3000"])
@app.route('/')
def index():
    return "Hello World"
@app.route('/library')
def library():
    response=requests.get("https://jsonplaceholder.typicode.com/posts/1")
    data=response.json()
    print("data=",data)
    return jsonify(data)

if __name__=="__main__":
    app.run(debug=True)