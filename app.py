from flask import Flask, request , jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)
@app.route('/register', methods=['POST'])
def register():
    try:
        db = mysql.connector.connect(
            host="localhost",
            user="root",
            password="Loldoom7",
            database="interntrack"
        )
        cursor = db.cursor()

        data = request.get_json()  # receive JSON from JavaScript

        email = data['email']
        password = data['password']

        query = "INSERT INTO users (email, password) VALUES (%s, %s)"
        values = (email, password)

        cursor.execute(query, values)
        db.commit()

        cursor.close()
        db.close()

        return jsonify({"message": "success"}), 200

    except mysql.connector.Error as err:
        print(f"Database error: {err}")
        return jsonify({"message": f"Database error: {str(err)}"}), 500

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": f"Error: {str(e)}"}), 500


if __name__ == "__main__":
    app.run(debug=True)
