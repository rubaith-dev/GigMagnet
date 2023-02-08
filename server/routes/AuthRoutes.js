import { Router } from "express";
import { signUp } from "../controllers/AuthControllers.js";

const authRoutes = Router()

authRoutes.post("/signup", signUp)

export default authRoutes