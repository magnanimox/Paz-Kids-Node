import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface UserInstance extends Model {
    id: number;
    name: string;
    lastname: string;
    email: string;
    passwordHash: string;
    isPazChurch: number;
    nameCity: string;
    nameChurch: string;
    id_state: string;
    id_city: string;
    id_church: string;
    cellphone: string;
    token: string;
    createdAt: string;
    updatedAt: string;
}

export const User = sequelize.define<UserInstance>(
    "User",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        lastname: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        passwordHash: {
            type: DataTypes.STRING,
        },
        isPazChurch: {
            type: DataTypes.NUMBER,
        },
        nameCity: {
            type: DataTypes.STRING,
        },
        nameChurch: {
            type: DataTypes.STRING,
        },
        id_state: {
            type: DataTypes.INTEGER,
            defaultValue: 9999,
        },
        id_city: {
            type: DataTypes.INTEGER,
            defaultValue: 9999,
        },
        id_church: {
            type: DataTypes.INTEGER,
            defaultValue: 9999,
        },
        cellphone: {
            type: DataTypes.INTEGER,
        },
        token: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "users",
        // timestamps: false,
    }
);
