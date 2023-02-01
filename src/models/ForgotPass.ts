import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface ForgotPassInstance extends Model {
    id: number;
    email: string;
    token: string;
}

export const ForgotPass = sequelize.define<ForgotPassInstance>(
    "ForgotPass",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        email: {
            type: DataTypes.STRING,
        },
        token: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "forgot_pass",
        timestamps: false,
    }
);
