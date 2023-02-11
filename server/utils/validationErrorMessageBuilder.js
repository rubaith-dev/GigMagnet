function validationErrorMessageBuilder(errorObject) {
  const messages = errorObject.details.map((detail) => {
    return detail.message;
  });

  return messages;
}

module.exports = validationErrorMessageBuilder;
