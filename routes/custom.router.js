const express = require("express")
const router = express.Router()

const customController = require("../controller/custom.controller")

// Test Api routes form same controller .. except those rest endpoints
router.get("/testing/:id", customController.testing)
router.get("/test/:cat_id", customController.test)

module.exports = router
