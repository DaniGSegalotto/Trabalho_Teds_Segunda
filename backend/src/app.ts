import express, {Application} from "express"
import cors from "cors"
import routerUsuario from "./routes/userRoute"
import routerProperty from "./routes/propertyRoute"
import routerUtils from "./routes/utilsRoute"
import errorHandler from "./middleware/errorHandler"

const app: Application = express()
app.use(express.json())
app.use(cors())

app.use("/api", routerUsuario)
app.use("/api", routerProperty)

app.use("/api", routerUtils)

/**
 * Error handling middleware.
 *
 * This middleware will catch any errors that occur during the processing
 * of requests and send a standardized error response.
 */
app.use(errorHandler);

export default app