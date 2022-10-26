import { TpEpisodeInstance } from "../models/TpEpisodes";
import { today } from "../helpers/index";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

export const getEpisodeOnArray = (data: TpEpisodeInstance) => {
    const episodeDate = dayjs(data.showAt);
    const start = episodeDate.subtract(2, "day").format("YYYY/MM/DD");
    const end = episodeDate.add(4, "day").format("YYYY/MM/DD");
    let showThisEpisode = false;

    if (today.isBetween(start, end, "day", "[]")) {
        showThisEpisode = true;
    }

    return showThisEpisode;
};
