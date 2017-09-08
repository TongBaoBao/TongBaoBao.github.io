const express = require('express')
const api = require('./api/index')

const router = express.Router()

router.get("/api/getPlan", api.getPlan);
router.post("/api/setPlan", api.setPlan);

router.get("/api/getWaterType", api.getWaterType);
router.post("/api/setWaterType", api.setWaterType);

module.exports = router;
