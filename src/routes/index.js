const express = require("express");

const formationsRouter = require("./formations_router");
const promotionsRouter = require("./promotions_router");

const mainRouter = express.Router();

mainRouter.use("/formations", formationsRouter);
mainRouter.use("/promotions", promotionsRouter);

module.exports = mainRouter;
