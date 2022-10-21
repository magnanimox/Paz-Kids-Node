import { Router } from "express";
import * as PageController from "../controllers/pageController";

const router = Router();

router.get("/", PageController.inicio);
router.get("/quemsomos", PageController.quemsomos);
router.get("/recursos", PageController.recursos);

router.get("/aventura-biblica", PageController.aventura);
router.get("/1temporada", PageController.temp1);
router.get("/2temporada", PageController.temp2);

export default router;
