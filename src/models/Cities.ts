import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface CityInstance extends Model {
    id_state: number;
    city: string;
    id: number;
    id_region: number;
}

export const City = sequelize.define<CityInstance>(
    "City",
    {
        id_state: {
            type: DataTypes.INTEGER,
        },
        city: {
            type: DataTypes.STRING,
            unique: true,
        },
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        id_region: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: "cities",
        timestamps: false,
    }
);
