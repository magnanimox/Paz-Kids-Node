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

    return episodes.filter((data: TpEpisodeInstance) => {
        const episodeDate = dayjs(data.showAt);

        if (!episodeDate.isValid()) {
            return false;
        }

        const start = episodeDate.subtract(2, "day").format("YYYY/MM/DD");
        const end = episodeDate.add(4, "day").format("YYYY/MM/DD");
        let showThisEpisode = false;

        if (today.isBetween(start, end, "day", "[]")) {
            showThisEpisode = true;
        }

        return showThisEpisode;
    })[0];
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
