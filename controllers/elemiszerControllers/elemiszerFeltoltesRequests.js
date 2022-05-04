const Food = require("../../models/Food");

const feltoltOldalLekeres = (req, res, next) => {
    res.render("elemiszerFeltolt");
};

const elemiszerFeltoltes = async (req, res, next) => {
    try {
        const body = req.body;

        const newFood = new Food(body);
        const kaja = await newFood.save();
        res.redirect("/elelmiszer");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { feltoltOldalLekeres, elemiszerFeltoltes };