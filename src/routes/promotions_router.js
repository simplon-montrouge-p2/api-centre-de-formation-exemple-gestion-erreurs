const express = require("express");
require("express-async-errors");

const { OK, CREATED } = require("../helpers/status_codes");

const {
  recupererLesPromotions,
  recupererUnePromotion,
  ajouterUnePromotion
} = require("../controllers/promotions_controller");

const promotionsRouter = express.Router();

promotionsRouter.get("/", async (request, response) => {
  const promotions = await recupererLesPromotions();

  response.status(OK);
  response.json(promotions);
});

promotionsRouter.get("/:id", async (request, response) => {
  const { id } = request.params;
  const promotion = await recupererUnePromotion(id);

  response.status(OK);
  response.json(promotion);
});

promotionsRouter.post("/", async (request, response) => {
  const data = request.body;
  const nouvellePromotion = await ajouterUnePromotion(data);

  response.status(CREATED);
  response.json(nouvellePromotion);
});

module.exports = promotionsRouter;
