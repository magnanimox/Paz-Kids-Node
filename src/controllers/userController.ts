import { Request, Response } from "express";
import { State, StateInstance } from "../models/States";
import { City } from "../models/Cities";
import { Church } from "../models/Church";
import { User } from "../models/User";
import { Region } from "../models/Regions";

export const {
    getStates,
    getRegions,
    getCities,
    getChurches,
    info,
    editAction,
} = {
    getStates: async (req: Request, res: Response) => {
        let allStates: any = await State.findAll();
        let statesNames: any = [];

        for await (let i of allStates) {
            statesNames.push(i.state);
        }

        res.json(statesNames);
    },
    getRegions: async (req: Request, res: Response) => {
        let regions: any = await Region.findAll();
        res.json(regions);
    },
    getCities: async (req: Request, res: Response) => {
        let cities = await City.findAll();
        res.json(cities);
    },
    getChurches: async (req: Request, res: Response) => {
        let churches = await Church.findAll();
        res.json(churches);
    },
    info: async (req: Request, res: Response) => {
        let token = req.query.token;

        const user: any = await User.findOne({ where: { token } });

        const stateName: any = await State.findOne({
            where: { id: user.id_state },
        });

        const regionName: any = await Region.findOne({
            where: { id: user.id_region },
        });

        const cityName: any = await City.findOne({
            where: { id: user.id_city },
        });

        const churchName: any = await Church.findOne({
            where: { id: user.id_church },
        });

        res.json({
            name: user.name,
            email: user.email,
            state: stateName.state,
            region: regionName.region,
            city: cityName.city,
            church: churchName.church,
        });
    },

    editAction: async (req: Request, res: Response) => {},
};
