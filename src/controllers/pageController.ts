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
    let prevMonthLink = "https://pazkids.com.br/prev/" + prevMonthName;
    let nextMonthLink = "https://pazkids.com.br/next/" + nextMonthName;
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
    let prevMonthLink = "https://pazkids.com.br/prev/" + prevMonthName;
    let nextMonthLink = "https://pazkids.com.br/next/" + nextMonthName;
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
    let prevMonthLink = "https://pazkids.com.br/prev/" + prevMonthName;
    let nextMonthLink = "https://pazkids.com.br/next/" + nextMonthName;
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
    res.render("pages/manutencao");
};

export const recursos = async (req: Request, res: Response) => {
    let pageName = "Recursos";
    res.render("pages/manutencao");
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
    let logged = req.session.user;
    let username = "";
    let linkDown = false;

    if (logged) {
        username = req.session.user.name;
        linkDown = true;
    } else {
    }

    res.render("pages/1temporada", {
        episodes,
        selectAssista,
        username,
        logged,
        pageName,
        linkDown,
    });
};

export const temp2 = async (req: Request, res: Response) => {
    let episodes = await EpisodesTp.findAll({
        where: { temp: 2 },
    });
    let selectAssista = "selected";
    let pageName = "E.M.P. - 2ª Temporada";
    let logged = req.session.user;
    let username = "";
    let linkDown = false;

    if (logged) {
        username = req.session.user.name;
        linkDown = true;
    } else {
    }

    res.render("pages/2temporada", {
        episodes,
        selectAssista,
        username,
        logged,
        pageName,
        linkDown,
    });
};

export const temp3 = async (req: Request, res: Response) => {
    let episodes = await EpisodesTp.findAll({
        where: { temp: 3 },
    });
    let selectAssista = "selected";
    let pageName = "E.M.P. - 3ª Temporada";
    let logged = req.session.user;
    let username = "";
    let linkDown = false;

    if (logged) {
        username = req.session.user.name;
        linkDown = true;
    } else {
    }

    res.render("pages/3temporada", {
        episodes,
        selectAssista,
        username,
        logged,
        pageName,
        linkDown,
    });
};

export const hqd = async (req: Request, res: Response) => {
    let episodes = await EpisodesTp.findAll({
        where: { temp: 888 },
    });
    let selectAssista = "selected";
    let pageName = "E.M.P. - História, Quiz e Dinâmica";
    let logged = req.session.user;
    let username = "";
    let linkDown = false;

    if (logged) {
        username = req.session.user.name;
        linkDown = true;
    } else {
    }

    res.render("pages/hqd", {
        episodes,
        selectAssista,
        username,
        logged,
        pageName,
        linkDown,
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
