const { Router } = require("express");
const { signUp } = require("../controllers/authControllers");


const authRoutes = Router()

authRoutes.post("/signup", signUp)

module.exports = authRoutes