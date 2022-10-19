import { Request, Response } from "express";
import { EpisodesTp } from "../models/TpEpisodes";
import { EpisodesAb } from "../models/AbEpisodes";

// Rotas de Menu

export const inicio = (req: Request, res: Response) => {
    res.render("pages/inicio");
};

export const quemSomos = (req: Request, res: Response) => {
    res.send("quemsomos no controller");
    // res.render(pages/quemSomos);
};

export const recursos = (req: Request, res: Response) => {
    res.send("recursos no controller");
    // res.render(pages/recursos);
};

// Rotas das Séries

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
