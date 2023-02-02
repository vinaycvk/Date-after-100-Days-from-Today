const express = require("express");

const app = express();

var addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let date = addDays(new Date(2023, 1, 2), 100);
  response.send(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
});

module.exports = app;
