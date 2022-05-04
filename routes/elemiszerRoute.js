// Modulok kezelése
const express = require("express");
const { feltoltOldalLekeres, elemiszerFeltoltes } = require("../controllers/elemiszerControllers/elemiszerFeltoltesRequests");
const { elemiszerekMegjelenitese } = require("../controllers/elemiszerControllers/elemiszerRequests");

const router = express.Router();

router.get("/", elemiszerekMegjelenitese);

router.get("/feltoltes", feltoltOldalLekeres);

router.post("/feltoltes", elemiszerFeltoltes);

module.exports = router;