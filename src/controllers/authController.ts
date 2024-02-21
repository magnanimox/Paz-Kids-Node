import { NextFunction, Request, response, Response } from "express";
import dayjs from "dayjs";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import { User } from "../models/User";
import { State } from "../models/States";
import { ForgotPass } from "../models/ForgotPass";
import { validationResult, matchedData } from "express-validator";

//

export const { signinGet, signinPost } = {
    signinGet: async (req: Request, res: Response) => {
        res.render("pages/signin");
    },
    signinPost: async (req: Request, res: Response, next: NextFunction) => {
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
    
        if (req.session.user) {
            req.session.destroy((err) => {
                if (err) {
                    return next(err);
                }
            });
        }
    
        const payload = (Date.now() + Math.random()).toString();
        const token = await bcrypt.hash(payload, 10);
    
        user.token = token;
        await user.save();
    
        req.session.regenerate((err) => {
            if (err) {
                return next(err);
            }
    
            req.session.user = user;
            req.session.save(() => {
                res.render("pages/logged-in");
            });
        });
    }
}

export const { signupGet, signupPost } = {
    signupGet: async (req: Request, res: Response) => {
        let allStates = await State.findAll();
        let statesNames = [];

        for await (let i of allStates) {
            statesNames.push({ state: i.state, id: i.id });
        }

        res.render("pages/signup", { statesNames });
    },

    signupPost: async (req: Request, res: Response, next: NextFunction) => {
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

export const { forgotGet, forgotPost } = {
    forgotGet: async (req: Request, res: Response) => {
        let danger = false;

        if (req.query.error == "invalid_token") {
            danger = true;
            const message = "Token inválido.";
            res.render("pages/forgot", { danger, message });
            return;
        }

        res.render("pages/forgot");
    },
    forgotPost: async (req: Request, res: Response) => {
        let danger = false;

        try {
            const errors = validationResult(req);
            let success = false;

            if (!errors.isEmpty()) {
                danger = true;
                res.render("pages/forgot", { danger });
                return;
            }

            const data = matchedData(req);

            // Verificando o e-mail
            const user = await User.findOne({ where: { email: data.email } });
            console.log(user);
            if (!user) {
                danger = true;
                const message = "E-mail inválido.";
                res.render("pages/forgot", { danger, message });
                return;
            }

            const token = await bcrypt.hash(data.email, 10);
            ForgotPass.create({ email: data.email, token });

            //transporter
            var transport = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    user: "pazkidsonline@gmail.com",
                    pass: "qixtmafhkfxdmcqj",
                },
            });

            let createdAt = dayjs(user.createdAt).format("DD/MM/YYYY");

            //configuração de email
            let message = {
                from: '"Paz Kids Oficial" <smtp.gmail.com>',
                to: data.email,
                subject: "Recuperação de Senha",
                text: "Recuperação de Senha",
                html: `<div width="100%" style="background:#f8f8f8;padding:0px 0px;font-family:arial;line-height:28px;height:100%;width:100%;color:#514d6a">
                <div style="max-width:700px;padding:50px 0;margin:0px auto;font-size:14px">
                    <div style="padding:40px;background:#fff">
                        <table border="0" cellpadding="0" cellspacing="0" style="width:100%">
                            <tbody>
                                <tr>
                                    <td style="border-bottom:1px solid #f6f6f6">
                                        <h1 style="font-size:14px;font-family:arial;margin:0px;font-weight:bold">Recuperar Conta -  Paz Kids Oficial</h1>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding:10px 0 30px 0">
                                        <br><b>Email:</b> <a href="mailto:${user.email}" target="_blank">${user.email}</a>
                                        <br><b>Data de registro:</b> ${createdAt}
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding:10px 0 30px 0">
                                        <center><a href="https://www.pazkids.com.br/recover?token=${token}" style="display:inline-block;padding:11px 30px;margin:20px 0px 30px;font-size:15px;color:#fff;background:#02b7ff;border-radius:60px;text-decoration:none" target="_blank">Clique aqui para alterar sua senha</a></center>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="border-top:1px solid #f6f6f6;padding-top:20px;color:#777">
                                        Site: <a href="https://www.pazkids.com.br">Paz Kids Oficial</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="border-top:1px solid #f6f6f6;padding-top:20px;color:#777">
                                        <center><h4>Favor não responder este e-mail.</h4></center>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>`,
            };

            await transport.sendMail(message);

            success = true;
            res.render("pages/forgot", { success });
        } catch (error) {
            console.log(error);
        }
    },
};

export const { recoverGet, recoverPost } = {
    recoverGet: async (req: Request, res: Response) => {
        const token = req.query.token;

        if (!token) {
            res.render("pages/forgot");
            return;
        }

        const forgotToken = await ForgotPass.findOne({ where: { token } });

        const email = forgotToken?.email;

        if (forgotToken) {
            res.render("pages/recover", { email, token });
        } else {
            res.redirect(
                "https://www.pazkids.com.br/forgot?error=invalid_token"
            );
            return;
        }
    },
    recoverPost: async (req: Request, res: Response) => {
        const { email, password, token } = req.body;
        console.log(token);

        const user: any = await User.findOne({ where: { email } });
        const userForgot: any = await ForgotPass.findOne({ where: { token } });

        const newPasswordHash = await bcrypt.hash(password, 10);

        const payload = (Date.now() + Math.random()).toString();
        const newToken = await bcrypt.hash(payload, 10);

        user.token = newToken;
        user.passwordHash = newPasswordHash;
        user.save();
        userForgot.destroy();

        res.render("pages/success_forgot");
    },
};

export const logoutGet = async (req: Request, res: Response) => {
    req.session.destroy((err) => {
        if (err) {
            // Tratar o erro aqui, se necessário
            console.error("Erro ao destruir a sessão:", err);
            return res.status(500).send("Erro ao realizar logout");
        }

        // Opcional: Limpar o cookie do lado do cliente após destruir a sessão
        res.clearCookie('pazkids-session', { path: '/' }); // Substitua 'connect.sid' pelo nome do seu cookie de sessão, se for diferente.

        // Redirecionar para a página de logout ou renderizar uma mensagem de sucesso
        res.render("pages/logout");
    });
};

