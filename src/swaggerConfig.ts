import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "This project is a comprehensive platform for managing posts, comments, and user interactions. Built with Node.js, Express, and MongoDB, it includes functionalities for creating posts, adding comments, replying to comments, and filtering posts by categories, time, and upvotes. It supports user authentication and allows for dynamic interaction with posts through upvotes and downvotes.",
    },
    host: "localhost:8008",
    basePath: "/api",
  },
  apis: ["./src/routes/routes*.ts"],
};

const specs = swaggerJsdoc(options);

export const swaggerConfig = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
