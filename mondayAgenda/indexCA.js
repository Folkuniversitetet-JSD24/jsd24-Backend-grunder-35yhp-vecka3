// Vi använder swagger-jsdoc och swagger-ui-express för att skapa och visa dokumentationen
import express from "express";
import userRouter from "./routes/user.js";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const PORT = 3000;

// Swagger-dokumentation inställningar
// Här konfigurerar vi Swagger för att generera API-dokumentation
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", // Viktigt att använda OpenAPI 3.0 för mer avancerad dokumentation
    info: {
      title: "RESTful API", // Titel som visas i Swagger-gränssnittet
      description: "API-dokumentation med Swagger", // Kort beskrivning av API:et
      version: "1.0.0", // Versionsnummer på vårt API
    },
  },
  apis: ["./routes/*.js"], // Här anger vi var Swagger ska leta efter dokumentationskommentarer
};

// Generera Swagger-dokumentation
// Vi använder swaggerJsDoc för att skapa dokumentationen baserat på våra kommentarer
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Här konfigurerar vi Swagger UI så att vi kan visa dokumentationen på /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware för att hantera JSON-data i inkommande förfrågningar
// Detta gör att vi kan tolka JSON i inkommande request-bodies
app.use(express.json());

// Använd router för användarhantering
// Vi kopplar vår användar-router så att alla användarrelaterade endpoints börjar med /api/users
app.use("/api/users", userRouter);

// Starta servern
// Vi startar upp servern och lyssnar på den definierade porten
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
