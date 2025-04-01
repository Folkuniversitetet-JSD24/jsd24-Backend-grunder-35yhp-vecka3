import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Importera vår route fil
import userRouter from "./routes/userCA.js";

const app = express();
const PORT = 8080;

// Swagger-dokumentations inställningar
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "RESTful API",
      description: "API-dokumentation med Swagger",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

// Generera Swagger dokumentation
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Konfigurera Swagger UI så att vi kan visa upp dokumentationen vid en specifik url
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware express.json() för att hantera JSON-data
app.use(express.json());

// route Middleware för user
app.use("/api/users", userRouter);

// Starta vår server
app.listen(PORT, () => {
  console.log("Server körs på : http://localhost:8080");
});
