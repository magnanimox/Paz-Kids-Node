import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes/index";

const server = express();
dotenv.config();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

server.use(express.urlencoded({ extended: true }));

server.use(mainRoutes);

server.use((req, res) => {
    res.send("Página não encontrada!");
});
// Rotas

server.listen(process.env.PORT);
