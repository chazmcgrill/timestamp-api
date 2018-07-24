var express = require('express');
var app = express();

// serve static files like css
app.use(express.static('public'));

// loads index file on main route
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// timestamp with a date_string
app.get("/api/timestamp/:date_string", function (req, res) {
  const stamp = req.params.date_string
  if (/^\d+$/.test(stamp)) {
    const date = new Date(Number(req.params.date_string));
    res.json({ unix: stamp, utc: date.toUTCString() });
  } else {
    if (/^\d{1,4}-\d{2}-\d{2}$/.test(stamp)) {
      const date = new Date(req.params.date_string);
      res.json({ unix: date.getTime(), utc: date.toUTCString() });
    } else {
      res.json({ "error": "Invalid Date" });
    }
  }
});

// timestamp without date_string
app.get("/api/timestamp/", function (req, res) {
  const date = new Date();
  res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

// serve site
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});