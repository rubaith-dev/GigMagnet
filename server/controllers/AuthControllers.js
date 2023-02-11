const { PrismaClient, Prisma } = require("@prisma/client");
const {
  generateHashPassword,
  generateJwt,
  apiResponse,
  validationErrorMessageBuilder,
} = require("../utils");
const { validateSignup } = require("../validators");
const { StatusCodes } = require("http-status-codes");

const signUp = async (req, res, next) => {
  const { error, success, errorWithData } = apiResponse;
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
    res.cookie("jwt", token);

    //response with success
    return success(res, StatusCodes.CREATED, "User Created Successfully");
  }

  // If user found return error
  return error(res, StatusCodes.BAD_REQUEST, "User already exist with this email");
};

module.exports = { signUp };
