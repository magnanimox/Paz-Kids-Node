import { Router } from "express";
import * as PageController from "../controllers/pageController";

export const router = Router();

router.get("/", PageController.inicio);
router.get("/login", PageController.login);
router.get("/next/:month", PageController.nextmonth);
router.get("/prev/:month", PageController.prevmonth);
router.get("/quemsomos", PageController.quemsomos);
router.get("/recursos", PageController.recursos);

router.get("/aventura-biblica", PageController.aventura);
router.get("/1temporada", PageController.temp1);
router.get("/2temporada", PageController.temp2);

export default router;
