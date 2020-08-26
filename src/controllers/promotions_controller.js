const pick = require("lodash/pick");

const { Promotion } = require("../models");
const { recupererUneFormation } = require("./formations_controller");

const promotionsController = {
  recupererLesPromotions: async () => {
    const promotions = await Promotion.findAll({
      order: [["numero", "ASC"]],
      attributes: [
        "id",
        "formation",
        "numero",
        "dateDebut",
        "dateFin",
        "dateJury"
      ],
      raw: true
    });

    return promotions;
  },
  recupererUnePromotion: async id => {
    const promotion = await Promotion.findByPk(id, {
      attributes: [
        "id",
        "formation",
        "numero",
        "dateDebut",
        "dateFin",
        "dateJury"
      ],
      raw: true
    });

    return promotion;
  },
  ajouterUnePromotion: async data => {
    const { formationId } = data;
    const formation = await recupererUneFormation(formationId);

    const nouvellePromotion = {
      formation,
      ...pick(data, ["dateDebut", "dateFin", "dateJury"])
    };

    const promotionCree = await Promotion.create(nouvellePromotion);

    return promotionCree;
  }
};

module.exports = promotionsController;
