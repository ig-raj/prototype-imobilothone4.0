from flask import Flask, request, jsonify

from flask_cors import CORS

app = Flask(__name__)
CORS(app)



# Example mock AI model logic
def recommend_config(user_data):
    # Mock AI model logic
    if user_data['commute_distance'] > 50:
        return {
            'fuel_type': 'Hybrid',
            'seating': 'Standard',
            'extras': ['Navigation System', 'Eco Mode']
        }
    elif user_data['preference'] == 'luxury':
        return {
            'fuel_type': 'Petrol',
            'seating': 'Leather',
            'extras': ['Heated Seats', 'Premium Audio']
        }
    else:
        return {
            'fuel_type': 'Electric',
            'seating': 'Eco-friendly Fabric',
            'extras': ['Basic Audio', 'Standard GPS']
        }

# Endpoint for receiving user data and sending recommendations
@app.route('/api/recommend', methods=['POST'])
def recommend():
    user_data = request.get_json()  # Receive data as JSON
    recommendation = recommend_config(user_data)  # Get recommendation
    return jsonify(recommendation)  # Return recommendation as JSON

if __name__ == '__main__':
    app.run(debug=True)
