import { Request, Response } from "express";
import { TpEpisodeInstance, EpisodesTp } from "../models/TpEpisodes";
import { AbEpisodeInstance, EpisodesAb } from "../models/AbEpisodes";
import { getEpisodeOfArray } from "../helpers/rules";

import dayjs from "dayjs";
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

    let indexOfEpisode = episodesOfMonth.findIndex(getEpisodeOfArray);

    return episodesOfMonth[indexOfEpisode];
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
