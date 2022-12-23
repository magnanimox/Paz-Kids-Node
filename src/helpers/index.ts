// Require
require("dayjs/locale/pt");

// Imports
import { Request, Response } from "express";
import { TpEpisodeInstance, EpisodesTp } from "../models/TpEpisodes";
import { AbEpisodeInstance, EpisodesAb } from "../models/AbEpisodes";

// DayJs
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);
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
    let episodesOfMonth = [];
    let episodesOfLastMonth: any = [];

    episodesOfLastMonth = episodes.filter((data: TpEpisodeInstance) => {
        let monthOfEp = dayjs(data.showAt).format("MMMM");
        let showThisEpisode = false;

        if (monthOfEp === prevMonthName) {
            showThisEpisode = true;
        }

        return showThisEpisode;
    });

    let lastEp = episodesOfLastMonth[episodesOfLastMonth.length - 1];

    episodesOfMonth = episodes.filter((data: TpEpisodeInstance) => {
        let monthOfEp = dayjs(data.showAt).format("MMMM");
        let showThisEpisode = false;

        if (monthOfEp === monthName) {
            showThisEpisode = true;
        }
        return showThisEpisode;
    });

    episodesOfMonth.unshift(lastEp);
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
        let aDay = dayjs(a.showAt).format("D");
        let bDay = dayjs(b.showAt).format("D");

        return a - b;
    }

    episodesOfMonth.sort(orderEpisodes);

    return episodesOfMonth;
}

export async function cardTpNextMonth() {
    const episodes = await EpisodesTp.findAll();
    let episodesOfMonth = [];

    episodesOfMonth = episodes.filter((data: TpEpisodeInstance) => {
        let showThisEpisode = false;

        if (
            dayjs(data.showAt).format("MMMM") ===
            dayjs()
                .month(currentMonth + 1)
                .format("MMMM")
        ) {
            showThisEpisode = true;
        }
        return showThisEpisode;
    });

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
