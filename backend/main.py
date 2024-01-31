from flask import Flask, request,make_response
from utils import filter_words,autocomplete
from flask_cors import CORS

app=Flask(__name__)
CORS(app)

@app.route('/<string:word>')
def home(word):
	param_word=word.lower()
	res_words=autocomplete(param_word)
	res_words.sort(key=len)
	return make_response(res_words,201)

if(__name__=="__main__"):
	app.debug=True
	app.run(host="0.0.0.0",port=5000)