import cors from "cors";
import express from "express";
import mustache from "mustache-express";
import path from "path";
import { sessionConfigs } from "./middlewares/session";
import mainRoutes from "./routes/index";
import dotenv from "dotenv";

dotenv.config({
    path: ".env.production",
});

declare module "express-session" {
    interface SessionData {
        user: any;
    }
}

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};

// Server
const server = express();

server.use(cors(corsOptions));
server.use(express.urlencoded({ extended: true }));

// Mustache
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

// Public
if (process.env.NODE_ENV === "production") {
    server.use(express.static(path.join(__dirname, "public")));
} else {
    server.use(express.static(path.join(__dirname, "../public")));
}

// Session
server.use(sessionConfigs);

// Main Routes
server.use(mainRoutes);

// 404: Not Found
server.use((req, res) => {
    let pageName = "Página não encontrada";
    res.render("pages/404", {
        pageName,
    });
});

// Port
server.listen(process.env.PORT || 3000);
