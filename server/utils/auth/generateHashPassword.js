const { genSalt, hash } = require("bcrypt");

const generateHashPassword = async (password) => {
  const salt = await genSalt();
  return await hash(password, salt);
};

module.exports = generateHashPassword;
