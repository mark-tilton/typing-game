from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('mongo', 27017)
db = client.game
lines = db.lines

@app.route('/<language>')
def get_lines(language):
    query = { 'language': language }
    result = list(lines.find(query))
    return str(result)
