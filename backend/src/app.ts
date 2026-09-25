import express, {Express, Request, Response} from "express";
import morgan from "morgan";
import cors from "cors";

const app = express()

// Middleware
app.use(morgan("dev"));
app.use(cors())
app.use(express.json())

// Principal Route
app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "Welcome",
  })
})

export default app;
