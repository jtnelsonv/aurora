#!/usr/bin/python

from flask import Flask, render_template, jsonify
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, validators
from wtforms.fields.html5 import EmailField
import smtplib, re

app = Flask(__name__)
app.secret_key = 'xxxxxxx'

class EmailForm(FlaskForm):
    name = StringField('Name', [
        validators.Length(min=3, max=40, message='Your name must be between 3 and 40 characters.'),
        validators.InputRequired()])

    email = EmailField('Email', [
        validators.Length(min=10, max=80, message='Your email must be between 10 and 80 characters.'),
        validators.Email(),
        validators.InputRequired()])

    message = TextAreaField('Message', [
        validators.Length(min=25, max=200, message='Your message must be between 25 and 200 characters.'),
        validators.InputRequired()
        ])

@app.route('/')
def index():
    form = EmailForm()
    return render_template('index.html', form=form)

@app.route('/process/', methods=['POST'])
def process():
    form = EmailForm()

    if form.validate_on_submit():
        specialChar = re.findall(r'[\*\^\%\{\[\}\]\<\>\#]', form.message.data, re.MULTILINE)

        if specialChar:
            return jsonify({'msgError': 'Please do not use special characters.'})

        fullMsg = form.name.data + '\n\n' + form.email.data + '\n\n' + form.message.data
        server = smtplib.SMTP('in-v3.mailjet.com', 587)
        server.starttls()
        server.login('xxxxx', 'xxxxx')
        server.sendmail('xxxxxx', 'xxxxxx', fullMsg)
        server.quit()
        return jsonify({'message': 'Thank you for contacting me!'})
    
    return jsonify(form.errors)

# Needed if not on PythonAnywhere
# if __name__ == '__main__':
#     app.run(debug=True)
