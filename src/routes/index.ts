import { Router } from "express";
import { Auth } from "../middlewares/auth";
import * as PageController from "../controllers/pageController";
import * as AuthController from "../controllers/authController";
import * as UserController from "../controllers/userController";
import { AuthValidator } from "../validators/AuthValidator";

export const router = Router();

// Main Page
router.get("/", PageController.inicio);
router.get("/next/:month", PageController.nextmonth);
router.get("/prev/:month", PageController.prevmonth);

// Login and Logout
router.post("/signup", AuthValidator.signup, AuthController.signup);
router.post("/signin", AuthValidator.signin, AuthController.signin);
router.get("/signin", AuthController.signinPage);
router.get("/signup", AuthController.signupPage);
router.get("/logout", AuthController.logout);

// Forgot Password Page
router.post("/forgot", AuthValidator.forgot, AuthController.forgot);
router.get("/forgot", AuthController.forgotPage);

// Api
router.get("/user/states", UserController.getStates);
router.get("/user/cities", UserController.getCities);
router.get("/user/churches", UserController.getChurches);
router.get("/user/regions", UserController.getRegions);

// User
router.get("/user/me", Auth.private, UserController.info);

// Other Pages
router.get("/quemsomos", PageController.quemsomos);
router.get("/recursos", PageController.recursos);

// Media
router.get("/aventura-biblica", PageController.aventura);
router.get("/1temporada", PageController.temp1);
router.get("/2temporada", PageController.temp2);
router.get("/3temporada", PageController.temp3);

export default router;
