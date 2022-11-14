import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface StateInstance extends Model {
    id: number;
    state: string;
}

export const State = sequelize.define<StateInstance>(
    "State",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        state: {
            type: DataTypes.STRING,
            unique: true,
        },
    },
    {
        tableName: "states",
        timestamps: false,
    }
);
