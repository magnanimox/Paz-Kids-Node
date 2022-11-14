// Imports
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

export const inicio = async (req: Request, res: Response) => {
    let episodeTpToShow = await cardTp();
    let episodeAbToShow = await cardAb();
    let prevMonthLink = "http://localhost:3000/prev/" + prevMonthName;
    let nextMonthLink = "http://localhost:3000/next/" + nextMonthName;
    let selectInicio = "selected";
    let logged = req.session.user;
    let username = "";
    let pageName = "Início";
    let linkDown = false;

    if (logged) {
        username = req.session.user.name;
        linkDown = true;
    } else {
    }
    console.log(username);

    res.render("pages/inicio", {
        monthName,
        episodeTpToShow,
        episodeAbToShow,
        prevMonthName,
        nextMonthName,
        prevMonthLink,
        nextMonthLink,
        selectInicio,
        logged,
        username,
        pageName,
        linkDown,
    });
};

export const prevmonth = async (req: Request, res: Response) => {
    let episodeTpToShow = await cardTpPrevMonth();
    let episodeAbToShow = await cardAbPrevMonth();
    let prevMonthLink = "http://localhost:3000/prev/" + prevMonthName;
    let nextMonthLink = "http://localhost:3000/next/" + nextMonthName;
    let selectInicio = "selected";
    let logged = req.session.user;
    let username = "";
    let pageName = "Início";
    let linkDown = false;

    if (logged) {
        username = req.session.user.name;
        linkDown = true;
    } else {
    }
    console.log(username);

    res.render("pages/prevmonth", {
        monthName,
        episodeTpToShow,
        episodeAbToShow,
        prevMonthName,
        nextMonthName,
        prevMonthLink,
        nextMonthLink,
        selectInicio,
        logged,
        username,
        pageName,
        linkDown,
    });
};

export const nextmonth = async (req: Request, res: Response) => {
    let episodeTpToShow = await cardTpNextMonth();
    let episodeAbToShow = await cardAbNextMonth();
    let prevMonthLink = "http://localhost:3000/prev/" + prevMonthName;
    let nextMonthLink = "http://localhost:3000/next/" + nextMonthName;
    let selectInicio = "selected";
    let logged = req.session.user;
    let username = "";
    let pageName = "Início";
    let linkDown = false;

    console.log(logged);
    if (logged) {
        username = req.session.user.name;
        linkDown = true;
    } else {
    }

    res.render("pages/nextmonth", {
        monthName,
        episodeTpToShow,
        episodeAbToShow,
        prevMonthName,
        nextMonthName,
        prevMonthLink,
        nextMonthLink,
        selectInicio,
        username,
        logged,
        pageName,
        linkDown,
    });
};

export const quemsomos = (req: Request, res: Response) => {
    let pageName = "Quem Somos";
    res.render("pages/quemsomos");
};

export const recursos = async (req: Request, res: Response) => {
    let pageName = "Recursos";
    res.render("pages/recursos");
};

export const aventura = async (req: Request, res: Response) => {
    let episodes = await EpisodesAb.findAll();
    let selectAssista = "selected";
    let pageName = "Aventura Bíblica";

    res.render("pages/aventura-biblica", {
        episodes,
        selectAssista,
        pageName,
    });
};

export const temp1 = async (req: Request, res: Response) => {
    let episodes = await EpisodesTp.findAll({
        where: { temp: 1 },
    });
    let selectAssista = "selected";
    let pageName = "E.M.P. - 1ª Temporada";

    res.render("pages/1temporada", {
        episodes,
        selectAssista,
        pageName,
    });
};

export const temp2 = async (req: Request, res: Response) => {
    let episodes = await EpisodesTp.findAll({
        where: { temp: 2 },
    });
    let selectAssista = "selected";
    let pageName = "E.M.P. - 2ª Temporada";

    res.render("pages/2temporada", {
        episodes,
        selectAssista,
        pageName,
    });
};

// Render Partials

export const header = async (req: Request, res: Response) => {
    let logged = req.session.user;
    // let username = req.session.user.name;

    res.render("pages/header", {
        logged,
        // username,
    });
};
