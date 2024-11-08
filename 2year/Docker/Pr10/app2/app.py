from flask import Flask, jsonify


app = Flask(__name__)

@app.route('/')
def data():
    return "Khitrov Nikita IKBO-20-21"

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8081)
