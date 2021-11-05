from flask import Flask, render_template
app = Flask(__name__, template_folder='./')

@app.route('/')
@app.route('/home')
def home_page():
    return render_template('index.html')

@app.route('/about')
def about_page():
    return render_template('About.html')

@app.route('/contact')
def contact_page():
    return render_template('Contact.html')

@app.route('/regulation')
def regulation_page():
    return render_template('Regulation.html')

if __name__ == '__main__':
    app.run(debug=True)