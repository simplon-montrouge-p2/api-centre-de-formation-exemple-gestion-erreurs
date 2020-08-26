const { Formation } = require("../models");

const formationsController = {
  recupererLesFormations: async () => {
    const formations = await Formation.findAll({
      order: [["nom", "ASC"]],
      attributes: ["id", "nom", "acronyme", "titreProfessionnel", "niveau"],
      raw: true
    });

    return formations;
  },
  recupererUneFormation: async id => {
    const formation = await Formation.findByPk(id, {
      attributes: ["nom", "acronyme", "titreProfessionnel", "niveau"],
      raw: true
    });

    return formation;
  }
};

module.exports = formationsController;
