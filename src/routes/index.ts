import { Router } from "express";
import { Auth } from "../middlewares/auth";
import * as PageController from "../controllers/pageController";
import * as AuthController from "../controllers/authController";
import * as UserController from "../controllers/userController";
import { AuthValidator } from "../validators/AuthValidator";
import nodemailer from "nodemailer"

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
router.post("/forgot", AuthController.forgot);
router.get("/forgot", AuthController.forgotPage);
router.get("/sendmail", async (req, res) => {
    //transporter
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "e65806f0ef2eb2",
          pass: "6a81d075e8e91c"
        }
      });

    //configuração de email
    let message = await transport.sendMail({
        from: '"Pessoa teste" <pessoa@teste.com>',
        to: "teste@teste.com",
        subject: "Email com Nodemailer",
        text: "Esse é um email de teste",
        html: "<p>Este é um email de teste</p>"
    })

    res.send("enviou")
})

// Api
router.get("/user/states", UserController.getStates);
router.get("/user/cities", UserController.getCities);
router.get("/user/churches", UserController.getChurches);

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
