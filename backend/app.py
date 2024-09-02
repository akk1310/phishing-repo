from flask import Flask, request, jsonify
from featureExtractor import featureExtraction
from pycaret.classification import load_model, predict_model
from flask_cors import CORS


model = load_model('model/phishingdetection')

def predict(url):
    data = featureExtraction(url)
    result = predict_model(model, data=data)
    prediction_score = result['prediction_score'][0]  
    prediction_label = result['prediction_label'][0] 
    
    # return {
    #     'prediction_label': prediction_label,
    #     'prediction_score': prediction_score * 100,
    # }
    return {
        'phishing': 1 if prediction_label == 1 else 0  # 1 indicates phishing, 0 indicates legitimate
    }
    
    
    
app = Flask(__name__)
CORS(app) 

@app.route("/predict", methods=["POST"])
# def index():
#     data = None
#     if request.method == "POST":
#         url = request.form["url"]
#         data = predict(url)
#         return render_template('index.html', url=url, data=data )
#     return render_template("index.html", data=data)
def predict_route():
    try:
        data = request.get_json()  # Get JSON data from the request
        url = data.get("url")  # Extract the URL from the JSON payload
        if not url:
            return jsonify({'error': 'No URL provided'}), 400  # Handle case where URL is not provided

        result = predict(url)  # Get the prediction result
        return jsonify(result)  # Return the result as JSON
    except Exception as e:
        return jsonify({'error': str(e)}), 500  # Handle exceptions

if __name__ == "__main__":
    app.run(debug=True)