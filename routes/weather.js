const weatherRoute = require("express").Router();
// заглушка
weatherRoute.get("/weather?q={country}", weatherController);

module.exports = weatherRoute;
