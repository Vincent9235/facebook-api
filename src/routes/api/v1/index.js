import { Router } from "express";
import posts from "./posts.route"
import auth from "./auth.route"
import users from "./users.route"
import jwt from '../../../middlewares/jwt.middleware';

const api = Router();

api.use("/users",jwt,users)
api.use("/posts",jwt, posts);
api.use("/auth",auth);

export default api;