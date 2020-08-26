const express = require("express");

const {
  recupererLesFormations
} = require("../controllers/formations_controller");

const formationsRouter = express.Router();

formationsRouter.get("/", async (request, response) => {
  const formations = await recupererLesFormations();

  response.status(200);
  response.json(formations);
});

module.exports = formationsRouter;
