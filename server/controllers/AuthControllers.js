const { PrismaClient, Prisma } = require("@prisma/client");
const {
  generateHashPassword,
  generateJwt,
  apiResponse,
  validationErrorMessageBuilder,
  comparePassword,
} = require("../utils");
const { validateSignup } = require("../validators");
const { StatusCodes } = require("http-status-codes");

const { error, success, errorWithData } = apiResponse;

const signUp = async (req, res, next) => {
  const { error: validationError } = validateSignup(req.body);
  const { email, password } = req.body;
  const prisma = new PrismaClient();

  // If req body validation occurs send the error response
  if (validationError) {
    //validation error will be generated with validationErrorMessageBuilder function
    let data = validationErrorMessageBuilder(validationError);

    //Now we send the response error with data
    return errorWithData(
      res,
      StatusCodes.BAD_REQUEST,
      "validation error occured",
      data
    );
  }

  //Check if the user already exist
  const user = await prisma.user.findUnique({ where: { email } });

  // If no existing user already found create the user
  if (!user) {
    const user = await prisma.user.create({
      data: { email, password: await generateHashPassword(password) },
    });

    const token = generateJwt(email, user.id);

    //set the cookie in the response
    res.cookie("access-token", token);

    //response with success
    return success(res, StatusCodes.CREATED, "User Created Successfully");
  }

  // If user found return error
  return error(
    res,
    StatusCodes.BAD_REQUEST,
    "User already exist with this email"
  );
};

const signIn = async (req, res) => {
  const { error: validationError } = validateSignup(req.body);
  const { email, password } = req.body;
  const prisma = new PrismaClient();

  // If req body validation occurs send the error response
  if (validationError) {
    //validation error will be generated with validationErrorMessageBuilder function
    let data = validationErrorMessageBuilder(validationError);

    //Now we send the response error with data
    return errorWithData(
      res,
      StatusCodes.BAD_REQUEST,
      "validation error occured",
      data
    );
  }

  //Check if the user exist
  const user = await prisma.user.findUnique({ where: { email } });

  // If no existing user found send error
  if (!user) {
    return error(res, StatusCodes.BAD_REQUEST, "No user found with this email");
  }

  const isPasswordCorrect = await comparePassword(password, user.password);

  if (!isPasswordCorrect) {
    return error(res, StatusCodes.BAD_REQUEST, "Password not correct");
  }

  const token = generateJwt(email, user.id);

  //set the cookie in the response
  res.cookie("access-token", token);

  // If user found and password is correct return sucess
  return success(res, StatusCodes.OK, "Login Successfull");
};

module.exports = { signUp, signIn };
