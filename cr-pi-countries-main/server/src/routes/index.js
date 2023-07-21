const { Router } = require("express");

const getCountries = require("../controllers/getCountries")
const getCountryById = require("../controllers/getCountryById")
const getCountryByName = require("../controllers/getCountryByName")
const postActivity = require("../controllers/postActivity");
const getAllActivity = require("../controllers/getAllActivity");


const router = Router();

router.get("/countries" , getCountries )
router.get("/countries/:idPais" , getCountryById)
router.get("/countries/name?=" , getCountryByName)
router.post("/activities" , postActivity)
router.get("/activities" , getAllActivity)


module.exports = router;
