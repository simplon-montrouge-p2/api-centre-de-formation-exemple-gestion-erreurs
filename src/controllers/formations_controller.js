const { Formation } = require("../models");

const NotFoundError = require("../helpers/errors/not_found_error");

const formationsController = {
  recupererLesFormations: async () => {
    const formations = await Formation.findAll({
      order: [["nom", "ASC"]],
      attributes: ["id", "nom", "acronyme", "titreProfessionnel", "niveau"],
      raw: true
    });

    if (formations.length === 0) {
      throw new NotFoundError(
        "Ressource introuvable",
        "Désolé, nous n'avons pas trouvé de formations."
      );
    }

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
