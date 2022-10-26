import { Request, Response } from "express";
import { EpisodesTp } from "../models/TpEpisodes";
import { EpisodesAb } from "../models/AbEpisodes";
import { monthName, cardTp, cardAb } from "../helpers/index";
import dayjs from "dayjs";

export const inicio = async (req: Request, res: Response) => {
    const episodeTpToShow = await cardTp();
    const episodeAbToShow = await cardAb();
    let episodeWeekDisplay = dayjs(episodeTpToShow.showAt).format(
        "DD/MMM/YYYY"
    );

    res.render("pages/inicio", {
        monthName,
        episodeTpToShow,
        episodeAbToShow,
        episodeWeekDisplay,
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
