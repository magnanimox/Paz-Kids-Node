import { Request, Response, NextFunction } from "express";
import { User } from "../models/User";
import dotenv from "dotenv";

dotenv.config();

export const Auth = {
    private: async (req: Request, res: Response, next: NextFunction) => {
        if (!req.query.token && !req.body.token) {
            res.json({ nottallowed: true });
            return;
        }

        let token = "";

        if (req.query.token) {
            token = req.query.token as string;
        }

        if (req.body.token) {
            token = req.body.token as string;
        }

        if (token == "") {
            res.json({ nottallowed: true });
            return;
        }

        const user = await User.findOne({ where: { token } });

        if (!user) {
            res.json({ nottallowed: true });
            return;
        }
        next();
    },
};
