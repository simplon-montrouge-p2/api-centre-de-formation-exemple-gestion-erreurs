const express = require("express");

const {
  recupererLesPromotions,
  recupererUnePromotion,
  ajouterUnePromotion,
} = require("../controllers/promotions_controller");

const promotionsRouter = express.Router();

promotionsRouter.get("/", async (request, response) => {
  const promotions = await recupererLesPromotions();

  response.status(200);
  response.json(promotions);
});

promotionsRouter.get("/:id", async (request, response) => {
  const { id } = request.params;
  const promotion = await recupererUnePromotion(id);

  response.status(200);
  response.json(promotion);
});

promotionsRouter.post("/", async (request, response) => {
  const data = request.body;
  const nouvellePromotion = await ajouterUnePromotion(data);

  response.status(201);
  response.json(nouvellePromotion);
});

module.exports = promotionsRouter;
