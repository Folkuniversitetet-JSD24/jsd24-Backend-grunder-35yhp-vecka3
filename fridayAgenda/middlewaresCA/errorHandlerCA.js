// 🧠 En global error handler som fångar valideringsfel m.m.
const errorHandler = (err, req, res, next) => {
  // 🔍 Om felet kommer från Joi (valideringsfel)
  if (err.isJoi) {
    return res.status(400).json({ error: err.details[0].message });
  }

  // 💥 Annars logga felet och svara med generiskt felmeddelande
  console.error(err.stack);
  res.status(500).json({ error: "Något gick fel på servern." });
};

export default errorHandler;
