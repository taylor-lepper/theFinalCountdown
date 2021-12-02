const { Router } = require("express");
const router = Router();
const authController = require("../controllers/authController");

router.post("/register", authController.postRegister);
router.post("/login", authController.postLogin);
router.post("/create", authController.postCreate);

module.exports = router;
