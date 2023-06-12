const { PrismaClient } = require("@prisma/client");
const { BadRequest } = require("../errors");
const {
  generateHashPassword,
  generateJwt,
  validationErrorMessageBuilder,
  commonResponse,
} = require("../utils");
const { validateSignup } = require("../validators");

const signUp = async (req, res, next) => {
  const { error } = validateSignup(req.body);

  if (error) {
    res.status(400).json(commonResponse(validationErrorMessageBuilder(error), false));
  }

  // console.log(error)

  // const prisma = new PrismaClient();

  // throw new BadRequest(["kuttarbaccha kam kn koros na", "ghjkghjkxczc"]);

  // const { email, password } = req.body;
  // if (!email || !password) {
  //   throw new BadRequest(`Email and Password can not be empty`);
  // }

  // const user = await prisma.user.create({
  //   data: { email, password: await generateHashPassword(password) },
  // });

  // const token = generateJwt(email, user.id);

  // return res
  //   .cookie("jwt", token)
  //   .status(201)
  //   .json({ msg: "User created successfully" });
};

module.exports = { signUp };
