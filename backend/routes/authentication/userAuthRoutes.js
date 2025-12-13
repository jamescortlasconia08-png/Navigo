// routes/authRoutes.js
import express from "express";
import { register, login } from "../../controller/authentication/userAuth.js";

const userAuthRouter = express.Router();

userAuthRouter.post("/register", register);
userAuthRouter.post("/login", login);

export default userAuthRouter;
