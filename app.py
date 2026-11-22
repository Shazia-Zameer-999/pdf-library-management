from flask import Flask, jsonify, request
import requests
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient("mongodb://localhost:27017/")
db = client["library"]

CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])


@app.route("/")
def index():
    return "Hello World"


@app.route("/search", methods=["POST","GET"])
def search():
    if request.method=="POST":
        print("SEARCH ROUTE HIT")
        data = request.get_json()
        print(data)
        search_term = data.get("search")

        url = "https://openlibrary.org/search.json"
        response = requests.get(
            url,
            params={
                "q": search_term,
                "limit": 20,
                "fields": "key,title,author_name,cover_i,first_publish_year,edition_count",
            },
        )
        print(response)
        print(response.json())
        # print(request.json)
        return jsonify(response.json())
    else:
        return jsonify({"messsage":"success"})

@app.route('/library',methods=["POST","GET"])
def library():
    if request.method=="POST":
        return jsonify({"messsage":"success"})
    else:
        return jsonify({"messsage":"success"})
if __name__ == "__main__":
    app.run(debug=True)
