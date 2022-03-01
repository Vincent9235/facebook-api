import jwt from "jsonwebtoken";
import * as UserModel from "../models/users.model";

const bcrypt = require("bcrypt");
const trial = 10;

export const login = async (request, response) => {
  const { email, password } = request.body;
  bcrypt.hash(password, trial, async (err, hash) => {
    const user = await UserModel.findByCredentials({
      email,
      password: hash,
    });
    const token = jwt.sign({ email: email }, "SECRET");
    response.json({
      user,
      token,
    });
  });
};

export const register = async (request, response) => {
  const { email, password } = request.body;
  let updateAt = new Date();
  let createdAt = new Date();
  bcrypt.hash(password, trial, async (err, hash) => {
    const user = await UserModel.createUser({ email, password: hash, createdAt, updateAt, });
    response.status(201).json(user);
  });
};
