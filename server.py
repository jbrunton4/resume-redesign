import flask

app = flask.Flask(__name__)

@app.route("/", methods=["GET"])
def index():
  return flask.render_template("index.html")

@app.route("/grades/gcse", methods=["GET"])
def gcses():
  return flask.render_template("grades/gcses.html")

@app.route("/grades/alevel", methods=["GET"])
def alevels():
  return flask.render_template("grades/alevels.html")

@app.route("/references/01", methods=["GET"])
def ref01():
  return flask.render_template("references/wetherby-high-school.html")

@app.route("/projects", methods=["GET"])
def projects():
  return flask.render_template("projects/projects.html")

# auto reload templates
def before_request():
    app.jinja_env.cache = {}
app.before_request(before_request)

app.run()
