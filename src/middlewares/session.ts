import session from "express-session";
import dotenv from 'dotenv';
dotenv.config({ path: './.env.production' });

const MySQLStore = require("express-mysql-session")(session);

const options = {
    host: "157.230.184.110",
    port: "3306",
    user: "tiago",
    password: "h@tPrX%2F^R59J9yfE75",
    database: "pazkids",
    clearExpired: true,
    checkExpirationInterval: 900000,
};


const sessionStore = new MySQLStore(options);

export const sessionConfigs = session({
    name: "pazkids-session",
    cookie: {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600000 * 500,
        sameSite: "lax",
    },
    store: sessionStore,
    secret: process.env.SESSION_SECRET || "fallback_secret",
    resave: false,
    saveUninitialized: false,
});
