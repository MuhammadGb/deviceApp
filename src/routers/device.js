const express = require("express");
const router = express.Router();

const { create } = require("../controllers/device");

router.route("/").post(create);

//router.put("/:noteId", auth.authenticate("bearer"), updateNote);

module.exports = router;
