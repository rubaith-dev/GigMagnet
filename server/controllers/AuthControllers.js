import { PrismaClient } from "@prisma/client";
import { BadRequest } from "../errors/index.js";
import { genSalt, hash } from "bcrypt";

export const signUp = async (req, res, next) => {
  const prisma = new PrismaClient();

  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequest(`Email and Password can not be empty`);
  }

  const user = await prisma.user.create({
    data: { email, password: await generatePassword(password) },
  });

  res.send({ email, password });
};

const generatePassword = async (password) => {
  const salt = await genSalt();
  return await hash(password, salt);
};
