// Require
require("dayjs/locale/pt");

// Imports
import { TpEpisodeInstance, EpisodesTp } from "../models/TpEpisodes";
import { AbEpisodeInstance, EpisodesAb } from "../models/AbEpisodes";

// DayJs
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import dayOfYear from "dayjs/plugin/dayOfYear";
dayjs.extend(isBetween);
dayjs.extend(dayOfYear);
dayjs.locale("pt-br");

// Variables DayJs
export let today = dayjs();
export let month = today.month();
export let monthName = dayjs().format("MMMM");

let currentMonth = month;
let prevMonth = today.month(today.month() - 1);
let nextMonth = today.month(today.month() + 1);
export let prevMonthName = dayjs(prevMonth).format("MMMM");
export let nextMonthName = dayjs(nextMonth).format("MMMM");

// Functions
export async function cardTp() {
    const episodes = await EpisodesTp.findAll();
    const monthOfEpisodes = (month: string) =>
        episodes.filter(
            (data: TpEpisodeInstance) =>
                dayjs(data.showAt).format("MMMM") === month
        );

    const episodesOfMonth = monthOfEpisodes(monthName);
    const episodesOfLastMonth = monthOfEpisodes(prevMonthName);
    const episodesOfNextMonth = monthOfEpisodes(nextMonthName);

    const sortByDate = (a: TpEpisodeInstance, b: TpEpisodeInstance) =>
        dayjs(a.showAt).diff(dayjs(b.showAt));

    episodesOfLastMonth.sort(sortByDate);
    episodesOfNextMonth.sort(sortByDate);

    if (episodesOfLastMonth.length > 0) {
        episodesOfMonth.unshift(
            episodesOfLastMonth[episodesOfLastMonth.length - 1]
        );
    }

    if (episodesOfNextMonth.length > 0) {
        episodesOfMonth.push(episodesOfNextMonth[0]);
    }

    episodesOfMonth.sort(sortByDate);
    return episodesOfMonth;
}

export async function cardTpPrevMonth() {
    const episodes = await EpisodesTp.findAll();
    let episodesOfMonth: TpEpisodeInstance[] = [];

    episodesOfMonth = episodes.filter((data: TpEpisodeInstance) => {
        let monthOfEp = dayjs(data.showAt).format("MMMM");
        let showThisEpisode = false;

        if (
            monthOfEp ===
            dayjs()
                .month(currentMonth - 1)
                .format("MMMM")
        ) {
            showThisEpisode = true;
        }
        return showThisEpisode;
    });

    function orderEpisodes(a: any, b: any) {
        let aDay: string = dayjs(a.showAt).format("D");
        let bDay: string = dayjs(b.showAt).format("D");

        return parseInt(aDay) - parseInt(bDay);
    }

    episodesOfMonth.sort(orderEpisodes);

    return episodesOfMonth;
}

export async function cardTpNextMonth() {
    const episodes = await EpisodesTp.findAll();
    let episodesOfMonth: TpEpisodeInstance[] = [];

    episodesOfMonth = episodes.filter((data: TpEpisodeInstance) => {
        let monthOfEp = dayjs(data.showAt).format("MMMM");
        let showThisEpisode = false;

        if (
            monthOfEp ===
            dayjs()
                .month(currentMonth + 1)
                .format("MMMM")
        ) {
            showThisEpisode = true;
        }
        return showThisEpisode;
    });

    function orderEpisodes(a: any, b: any) {
        let aDay: string = dayjs(a.showAt).format("D");
        let bDay: string = dayjs(b.showAt).format("D");

        return parseInt(aDay) - parseInt(bDay);
    }

    episodesOfMonth.sort(orderEpisodes);

    return episodesOfMonth;
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

export async function cardAbPrevMonth() {
    const episodes = await EpisodesAb.findAll();

    return episodes.filter((episodeAb: AbEpisodeInstance) => {
        const episodeMonth = episodeAb.showAt;
        let showThisEpisode = false;

        if (episodeMonth === prevMonthName) {
            showThisEpisode = true;
        }
        return showThisEpisode;
    })[0];
}

export async function cardAbNextMonth() {
    const episodes = await EpisodesAb.findAll();

    return episodes.filter((episodeAb: AbEpisodeInstance) => {
        const episodeMonth = episodeAb.showAt;
        let showThisEpisode = false;

        if (episodeMonth === nextMonthName) {
            showThisEpisode = true;
        }
        return showThisEpisode;
    })[0];
}
