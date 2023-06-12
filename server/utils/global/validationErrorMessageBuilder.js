const validationErrorMessageBuilder = (error) => {

  const errorMessages = error.details.map((err) => {
    return err.message.replace(/^"(.*)"$/, '$1')
  });

  return errorMessages
};

module.exports = validationErrorMessageBuilder;
