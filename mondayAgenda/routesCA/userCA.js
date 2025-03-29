import express from "express";
const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Hämta alla användare
 *     description: Returnerar en lista med alla användare.
 *     responses:
 *       200:
 *         description: Lyckad hämtning av användare
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Användarens unika ID
 *                   name:
 *                     type: string
 *                     description: Användarens namn
 */

// Skapar en GET-route för att hämta alla användare
// När klienten skickar en GET-förfrågan till /api/users returnerar vi en lista med användare
router.get("/", (req, res) => {
  const users = [
    { id: 1, name: "Anna" },
    { id: 2, name: "Klas" },
  ];

  // Skickar tillbaka listan med användare i JSON-format
  res.json(users);
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Skapa en ny användare
 *     description: Skapar en användare med ett namn.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Namnet på användaren
 *                 example: "Oskar"
 *     responses:
 *       201:
 *         description: Användare skapad
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Bekräftelsemeddelande
 *                 user:
 *                   type: object
 *                   description: Den skapade användaren
 */

// Skapar en POST-route för att skapa en ny användare
// När klienten skickar en POST-förfrågan till /api/users tar vi emot användardatan
router.post("/", (req, res) => {
  const newUser = req.body;

  // Skickar tillbaka en respons med status 201 (Created) och den skapade användaren
  res.status(201).json({ message: "Användare skapad", user: newUser });
});

// Exporterar routern så att den kan användas i andra filer
export default router;
