import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Property Listing API",
            version: "1.0.0",
            description: "API for listing properties online",
        },
    },
    apis: ["../routes/*.ts"],
}