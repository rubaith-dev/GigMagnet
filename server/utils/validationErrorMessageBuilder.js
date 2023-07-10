function validationErrorMessageBuilder(errorObject) {
  const messages = errorObject.details.map((detail) => {
    return `Field ${detail.message}`;
  });

  return messages;
}

module.exports = validationErrorMessageBuilder;
