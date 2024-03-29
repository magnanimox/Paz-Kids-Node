import session from "express-session";
const MySQLStore = require("express-mysql-session")(session);

import dotenv from "dotenv";

dotenv.config({
    path: "./.env.production",
});

const options = {
    host: process.env.MYSQL_HOST as string,
    port: parseInt(process.env.MYSQL_PORT as string) || 3306,
    user: process.env.MYSQL_USER as string,
    password: process.env.MYSQL_PASSWORD as string,
    database: process.env.MYSQL_DATABASE as string,
    clearExpired: true,
    checkExpirationInterval: 900000,
};

const sessionStore = new MySQLStore(options);

export const sessionConfigs = session({
    name: "pazkids-session",
    cookie: {
        path: "/",
        maxAge: 3600000 * 500,
    },
    store: sessionStore,
    secret: "$2y$10$EyRoSbN1wRqLrEQV9TzR0uk8w/TZX1DdyO7wGYW2eWhSVuW2DbmEG",
    resave: false,
    saveUninitialized:false,
});
