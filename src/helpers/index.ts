import { Request, Response } from "express";
import { EpisodeInstance, EpisodesTp } from "../models/TpEpisodes";
import { EpisodesAb } from "../models/AbEpisodes";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.locale("pt-br");
let month = dayjs().month();
export let today = dayjs();
export let monthName = dayjs().format("MMMM");

export async function cardTp({ date }: { date?: string }) {
    if (date) {
        today = dayjs(date);
    }

    const episodes = await EpisodesTp.findAll();

    return episodes.filter((data: EpisodeInstance) => {
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
