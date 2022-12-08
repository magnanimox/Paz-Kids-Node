// Imports
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Import DotEnv
dotenv.config({
    path: ".env.production",
});

// Sequelize / Database
export const sequelize = new Sequelize({
    host: process.env.MYSQL_HOST as string,
    username: process.env.MYSQL_USER as string,
    password: process.env.MYSQL_PASSWORD as string,
    database: process.env.MYSQL_DATABASE as string,
    dialect: "mysql",
    port: parseInt(process.env.MYSQL_PORT as string),
});
