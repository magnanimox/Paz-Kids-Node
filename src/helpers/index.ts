import { Request, Response } from "express";
import { TpEpisodeInstance, EpisodesTp } from "../models/TpEpisodes";
import { AbEpisodeInstance, EpisodesAb } from "../models/AbEpisodes";

import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);
require("dayjs/locale/pt");
dayjs.locale("pt-br");

export let today = dayjs();
export let monthName = today.format("MMMM");

export async function cardTp() {
    const episodes = await EpisodesTp.findAll();
    let episodesOfMonth = [];

    episodesOfMonth = episodes.filter((data: TpEpisodeInstance) => {
        let showThisEpisodes = false;

        if (dayjs(data.showAt).format("MMMM") === monthName) {
            showThisEpisodes = true;
        }
        return showThisEpisodes;
    });

    const getEpisodeOnArray = (data: TpEpisodeInstance) => {
        const episodeDate = dayjs(data.showAt);
        const start = episodeDate.subtract(2, "day").format("YYYY/MM/DD");
        const end = episodeDate.add(4, "day").format("YYYY/MM/DD");
        let showThisEpisode = false;

        if (today.isBetween(start, end, "day", "[]")) {
            showThisEpisode = true;
        }

        return showThisEpisode;
    };

    let indexEp = episodesOfMonth.findIndex(getEpisodeOnArray);
    return episodesOfMonth[indexEp];
}

export async function cardAb() {
    const episodes = await EpisodesAb.findAll();

    return episodes.filter((episodeAb: AbEpisodeInstance) => {
        const episodeMonth = episodeAb.showAt;
        let showThisEpisode = false;

        if (episodeMonth === monthName) {
            showThisEpisode = true;
        }
        return showThisEpisode;
    })[0];
}
