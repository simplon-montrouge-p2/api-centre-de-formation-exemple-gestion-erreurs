const express = require("express");
require("express-async-errors");

const { OK } = require("../helpers/status_codes");

const {
  recupererLesFormations
} = require("../controllers/formations_controller");

const formationsRouter = express.Router();

formationsRouter.get("/", async (request, response) => {
  const formations = await recupererLesFormations();

  response.status(OK);
  response.json(formations);
});

module.exports = formationsRouter;
