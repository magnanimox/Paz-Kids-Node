import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface ChurchInstance extends Model {
    id_city: number;
    church: string;
    id: number;
}

export const Church = sequelize.define<ChurchInstance>(
    "User",
    {
        id_city: {
            type: DataTypes.INTEGER,
        },
        church: {
            type: DataTypes.STRING,
            unique: true,
        },
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
    },
    {
        tableName: "churchs",
        timestamps: false,
    }
);
