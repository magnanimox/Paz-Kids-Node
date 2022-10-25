import { Request, Response } from "express";
import { EpisodeInstance, EpisodesTp } from "../models/TpEpisodes";
import { EpisodesAb } from "../models/AbEpisodes";
import dayjs from "dayjs";
import { monthName, today, cardTp } from "../helpers/index";

var isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);

export const inicio = async (req: Request, res: Response) => {
    const episodeToShow = await cardTp({
        date: req.query.date as string,
    });
    console.log(req.query);

    res.render("pages/inicio", {
        monthName,
        episodeToShow,
    });
};

export const quemsomos = (req: Request, res: Response) => {
    res.render("pages/quemsomos");
};

export const recursos = async (req: Request, res: Response) => {
    res.render("pages/recursos");
};

export const aventura = async (req: Request, res: Response) => {
    let episodes = await EpisodesAb.findAll();

    res.render("pages/aventura-biblica", {
        episodes,
    });
};

export const temp1 = async (req: Request, res: Response) => {
    let episodes = await EpisodesTp.findAll({
        where: { temp: 1 },
    });

    res.render("pages/1temporada", {
        episodes,
    });
};

export const temp2 = async (req: Request, res: Response) => {
    let episodes = await EpisodesTp.findAll({
        where: { temp: 2 },
    });

    res.render("pages/2temporada", {
        episodes,
    });
};
