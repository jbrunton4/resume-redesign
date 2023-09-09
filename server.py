import flask

app = flask.Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

@app.route("/")
def index():
    return flask.render_template("index.html")

app.run()