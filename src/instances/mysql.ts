// Imports
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Import DotEnv
dotenv.config();

// Sequelize / Database
export const sequelize = new Sequelize(
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        dialect: "mysql",
        port: parseInt(process.env.MYSQL_PORT as string),
    }
);
