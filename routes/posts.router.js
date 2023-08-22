const express = require("express")
const router = express.Router()

const postsController = require("../controller/posts.controller")

// Api Routes for posts
router.get("/", postsController.getAll)
router.get("/:id", postsController.getById)
router.post("/", postsController.create)
router.put("/:id", postsController.update)
router.delete("/:id", postsController.delete)

// Test Api routes form same controller .. except those rest endpoints
router.get("/testing", postsController.testing)

module.exports = router