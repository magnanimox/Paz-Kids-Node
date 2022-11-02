import { Request, Response } from "express";
import { EpisodesTp } from "../models/TpEpisodes";
import { EpisodesAb } from "../models/AbEpisodes";
import {
    monthName,
    prevMonthName,
    nextMonthName,
    cardTp,
    cardAb,
    cardAbPrevMonth,
    cardAbNextMonth,
    cardTpPrevMonth,
    cardTpNextMonth,
} from "../helpers/index";
import dayjs from "dayjs";

export const login = async (req: Request, res: Response) => {};

export const inicio = async (req: Request, res: Response) => {
    let episodeTpToShow = await cardTp();
    let episodeAbToShow = await cardAb();
    let prevMonthLink = "http://localhost:3000/prev/" + prevMonthName;
    let nextMonthLink = "http://localhost:3000/next/" + nextMonthName;
    let selectInicio = "selected";

    res.render("pages/inicio", {
        monthName,
        episodeTpToShow,
        episodeAbToShow,
        prevMonthName,
        nextMonthName,
        prevMonthLink,
        nextMonthLink,
        selectInicio,
    });
};

export const prevmonth = async (req: Request, res: Response) => {
    let episodeTpToShow = await cardTpPrevMonth();
    let episodeAbToShow = await cardAbPrevMonth();
    let prevMonthLink = "http://localhost:3000/prev/" + prevMonthName;
    let nextMonthLink = "http://localhost:3000/next/" + nextMonthName;
    let selectInicio = "selected";

    res.render("pages/prevmonth", {
        monthName,
        episodeTpToShow,
        episodeAbToShow,
        prevMonthName,
        nextMonthName,
        prevMonthLink,
        nextMonthLink,
        selectInicio,
    });
};

export const nextmonth = async (req: Request, res: Response) => {
    let episodeTpToShow = await cardTpNextMonth();
    let episodeAbToShow = await cardAbNextMonth();
    let prevMonthLink = "http://localhost:3000/prev/" + prevMonthName;
    let nextMonthLink = "http://localhost:3000/next/" + nextMonthName;
    let selectInicio = "selected";

    res.render("pages/nextmonth", {
        monthName,
        episodeTpToShow,
        episodeAbToShow,
        prevMonthName,
        nextMonthName,
        prevMonthLink,
        nextMonthLink,
        selectInicio,
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
    let selectAssista = "selected";

    res.render("pages/aventura-biblica", {
        episodes,
        selectAssista,
    });
};

export const temp1 = async (req: Request, res: Response) => {
    let episodes = await EpisodesTp.findAll({
        where: { temp: 1 },
    });
    let selectAssista = "selected";

    res.render("pages/1temporada", {
        episodes,
        selectAssista,
    });
};

export const temp2 = async (req: Request, res: Response) => {
    let episodes = await EpisodesTp.findAll({
        where: { temp: 2 },
    });
    let selectAssista = "selected";

    res.render("pages/2temporada", {
        episodes,
        selectAssista,
    });
};
