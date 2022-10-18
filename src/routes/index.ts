import { Router } from "express";
import * as PageController from "../controllers/pageController";

const router = Router();

router.get("/", PageController.inicio);
router.get("/quemsomos", PageController.quemSomos);
router.get("/assista", PageController.assista);
router.get("/recursos", PageController.recursos);

export default router;
