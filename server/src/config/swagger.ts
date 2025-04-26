import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Property Listing API",
            version: "1.0.0",
            description: "API for listing properties online",
        },
        servers: [
            {
                url: "/",
                description: "Default server",
            },
        ],
    },
    apis: [
        path.resolve(__dirname, "../routes/*.ts"),
        path.resolve(__dirname, "../controllers/*.ts"),
        path.resolve(__dirname, "../models/*.ts"),
    ],
};

export const swaggerSpec = swaggerJSDoc(options);
