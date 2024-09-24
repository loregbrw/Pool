import express from "express";
import cors from "cors";

import "reflect-metadata";
import "express-async-errors";
import usersRouter from "./routers/users.router";
import authRouter from "./routers/auth.router";
import handleError from "./middlewares/handleError.middleware";
import tagsRouter from "./routers/tags.router";
import projectsRouter from "./routers/projects.router";
import sprintsRouter from "./routers/sprints.router";
import columnsRouter from "./routers/column.router";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/tags", tagsRouter);
app.use("/projects", projectsRouter);
app.use("/sprints", sprintsRouter);
app.use("/columns", columnsRouter);

app.use(handleError);

export default app;