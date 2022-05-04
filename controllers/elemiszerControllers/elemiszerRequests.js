const Food = require("../../models/Food");

const elemiszerekMegjelenitese = async (req, res, next) => {
    try {
        const foods = await Food.find();
        // res.send(foods);
        res.render("elelmiszer", { foods });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { elemiszerekMegjelenitese };