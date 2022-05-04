const { getRequest } = require("../controllers/mainControllers/mainGetRequest");

const router = require("express").Router();

router.get("/", getRequest);

module.exports = router;