const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuid(),
    nom: "Concepteur développeur d'applications",
    acronyme: "CDA",
    titre_professionnel: "Concepteur développeur d'applications",
    niveau: 6,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Développeur web et web mobile",
    acronyme: "DWWM",
    titre_professionnel: "Développeur web et web mobile",
    niveau: 5,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Technicien d’assistance en informatique",
    acronyme: "TAI",
    titre_professionnel: "Technicien d’assistance en informatique",
    niveau: 4,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Technicien supérieur systèmes et réseaux",
    acronyme: "TSSR",
    titre_professionnel: "Technicien supérieur systèmes et réseaux",
    niveau: 5,
    created_at: now,
    updated_at: now
  }
];
