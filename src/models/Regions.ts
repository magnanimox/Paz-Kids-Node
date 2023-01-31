import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface RegionsInstance extends Model {
    id: number;
    region: string;
}

export const Region = sequelize.define<RegionsInstance>(
    "Regions",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        region: {
            type: DataTypes.STRING,
            unique: true,
        },
    },
    {
        tableName: "regions",
        timestamps: false,
    }
);
