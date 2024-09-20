import express from "express";
import cors from "cors";

import "reflect-metadata";
import "express-async-errors";
import usersRouter from "./routers/users.router";
import authRouter from "./routers/auth.router";
import handleError from "./middlewares/handleError.middleware";
import tagsRouter from "./routers/tags.router";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/tags", tagsRouter);

app.use(handleError);

export default app;