import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface EpisodeInstace extends Model {
    id: number;
    name: string;
    img: string;
    download: string;
    materiais: string;
    showAt: string;
}

export const EpisodesAb = sequelize.define<EpisodeInstace>(
    "Episode",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        img: {
            type: DataTypes.STRING,
        },
        download: {
            type: DataTypes.STRING,
        },
        materiais: {
            type: DataTypes.STRING,
        },
        showAt: {
            type: DataTypes.STRING,
            defaultValue: "#",
        },
    },
    {
        tableName: "abEpisodes",
        timestamps: false,
    }
);
