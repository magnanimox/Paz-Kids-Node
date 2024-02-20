import session from "express-session";
// import dotenv from "dotenv";

// dotenv.config({ 
//     path: './.env.production' 
// });

// console.log(process.env.SESSION_SECRET)

const MySQLStore = require("express-mysql-session")(session);

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
        httpOnly: true,
        maxAge: 3600000 * 500,
        sameSite: "lax",
    },
    store: sessionStore,
    secret: process.env.SESSION_SECRET || "fallback_secret",
    resave: false,
    saveUninitialized: false,
});
