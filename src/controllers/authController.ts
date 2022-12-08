import { NextFunction, Request, Response } from "express";
import { User } from "../models/User";
import { State } from "../models/States";
import { City } from "../models/Cities";
import { Church } from "../models/Church";
import { validationResult, matchedData } from "express-validator";
import dayjs from "dayjs";
import bcrypt from "bcrypt";
import { nextMonthName } from "../helpers";

export const { signin, signup } = {
    signin: async (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        let danger = false;

        if (!errors.isEmpty()) {
            danger = true;
            res.render("pages/signin", { danger });
            return;
        }

        const data = matchedData(req);

        // Verificando o e-mail
        const user = await User.findOne({ where: { email: data.email } });
        if (!user) {
            danger = true;
            res.render("pages/signin", { danger });
            return;
        }

        // Verificando a senha
        const match = await bcrypt.compare(data.password, user.passwordHash);
        if (!match) {
            danger = true;
            res.render("pages/signin", { danger });
            return;
        }

        const payload = (Date.now() + Math.random()).toString();
        const token = await bcrypt.hash(payload, 10);

        user.token = token;
        await user.save();

        req.session.user = user;
        req.session.save();

        res.render("pages/logged-in");
    },

    signup: async (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({ error: errors.mapped() });
            return;
        }

        const data = matchedData(req);
        let danger = false;

        // Verificando se e-mail já existe
        const user = await User.findOne({
            where: {
                email: data.email,
            },
        });

        if (user) {
            danger = true;
            res.render("pages/signup", { danger });
            return;
        }

        // Configs da Conta

        const passwordHash = await bcrypt.hash(data.password, 10);
        const payload = (Date.now() + Math.random()).toString();
        const token = await bcrypt.hash(payload, 10);

        // Criando usuário
        const newUser = await User.create({
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            cellphone: data.cellphone,
            passwordHash: passwordHash,
            isPazChurch: data.isPazChurch,
            nameCity: data.nameCity,
            nameChurch: data.nameChurch,
            id_state: data.id_state,
            id_city: data.id_city,
            id_church: data.id_church,
            token: token,
        });

        await newUser.save();

        newUser.token = token;
        req.session.user = newUser;
        req.session.save();

        res.render("pages/success");
    },
};

export const signupPage = async (req: Request, res: Response) => {
    let allStates = await State.findAll();
    let statesNames = [];

    for await (let i of allStates) {
        statesNames.push({ state: i.state, id: i.id });
    }

    res.render("pages/signup", { statesNames });
};

export const signinPage = async (req: Request, res: Response) => {
    res.render("pages/signin");
};

export const logout = async (req: Request, res: Response) => {
    req.session.destroy(() => {
        console.log("logout");
    });
    res.json({});
};

export const forgot = async (req: Request, res: Response) => {};

export const forgotPage = async (req: Request, res: Response) => {
    let danger = false;

    res.render("pages/forgot", { danger });
};
