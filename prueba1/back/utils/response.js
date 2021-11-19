const statusMessage = {
  200: "Done",
  201: "Created",
  400: "Invalid format",
  500: "Internal error",
};
exports.success = (req, res, data, status = 200) => {
  const message = statusMessage[status];
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "OPTIONS,POST,PUT,GET",
  });
  res.status(status).send({ error: "", body: data || message });
};
exports.error = (req, res, data, status = 500) => {
  const message = data || statusMessage[status];
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "OPTIONS,POST,PUT,GET",
  });
  res.status(status).send({ error: message, body: null });
};
