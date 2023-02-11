const { Router } = require("express");
const { signUp, signIn } = require("../controllers/authControllers");

const authRoutes = Router();

authRoutes.post("/signup", signUp);
authRoutes.post("/signin", signIn);

module.exports = authRoutes;
