// En för globala fel/error handler som ska fånga valideringsfel m.m.
const errorHandler = (err, req, res, next) => {
  // Om felet kommer från Joi (valideringsfel)
  if (err.isJoi) {
    return res.status(400).json({ error: err.details[0].message });
  }

  // Annars, logga felet med ett generiskt felmeddelande
  console.error(err.stack);
  res.status(500).json({ error: "Något gick sönder på servern." });
};

export default errorHandler;
