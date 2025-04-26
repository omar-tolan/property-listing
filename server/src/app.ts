import express, {
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler,
} from "express";
import { getRequestContext } from "./utils/request-context";
import { ApiError, InternalError } from "./core/api-error";
import listingsRouter from "./routes/listings";
import { swaggerSpec } from "./config/swagger";
import swaggerUi from "swagger-ui-express";

const port = process.env.PORT || 3333;

const app = express();

// Parse JSON request bodies
app.use(express.json());

// API routes
app.use("/listings", listingsRouter);

// Swagger documentation
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
    customCss: ".swagger-ui .topbar { display: none }",
    swaggerOptions: {
      docExpansion: "list",
      filter: true,
      showRequestDuration: true,
    },
  })
);

// Handle all thrown errors
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  const requestContext = getRequestContext(req, {
    includeBody: true,
    includeQuery: true,
    includeParams: true,
    includeHeaders: false,
  });
  if (!(error instanceof ApiError)) {
    const err = new InternalError(error.message, {
      ...requestContext,
      InternalErrorData: {
        message: error.message,
        stack: error.stack,
      },
    });
    ApiError.handle(err, res);
  } else {
    if (Object.keys(error.context).length == 0) {
      error.context = requestContext;
      ApiError.handle(error, res);
    }
    error.context = {
      ...error.context,
      ...requestContext,
    };
    ApiError.handle(error, res);
  }
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Not found" });
});

module.exports = app;
