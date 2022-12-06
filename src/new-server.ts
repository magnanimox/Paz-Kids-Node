import cors from "cors";
import express, { Router } from "express";
import mustache from "mustache-express";
import path from "path";

const corsOptions = {
  origin: "https://pazkids.vercel.app",
  credentials: true,
};

// Server
const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(cors(corsOptions));

export const router = Router();

router.get("/", (req, res) => {
  return res.render("pages/new-index", {
    pageName: "New Index",
  });
});

server.use(router);

server.use((req, res) => {
  return res.json({
    status: "NotFound",
  });
});

// Port
server.listen(process.env.PORT || 3000);
