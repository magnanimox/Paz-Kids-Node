import { Request, Response } from "express";
import { EpisodeInstance, EpisodesTp } from "../models/TpEpisodes";
import { EpisodesAb } from "../models/AbEpisodes";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.locale("pt-br");
let month = dayjs().month();
export let today = dayjs();
export let monthName = dayjs().format("MMMM");
