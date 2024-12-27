import express from "express";
import publicRoutes from "./route/public";
import privateRoutes from "./route/private";

import auth from "./middlewares/auth";

const app = express();
app.use(express.json());

app.use("/", publicRoutes);
app.use("/", auth, privateRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando...");
});
