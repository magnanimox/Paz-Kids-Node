import { Request, Response } from "express";

export const inicio = (req: Request, res: Response) => {
    res.send("home no controller");
    // res.render(pages/page);
};

export const quemSomos = (req: Request, res: Response) => {
    res.send("quemsomos no controller");
    // res.render(pages/quemSomos);
};

export const assista = (req: Request, res: Response) => {
    res.send("assista no controller");
    // res.render(pages/assista);
};

export const recursos = (req: Request, res: Response) => {
    res.send("recursos no controller");
    // res.render(pages/recursos);
};
