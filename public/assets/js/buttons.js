// Dayjs
dayjs.locale("pt-br");
dayjs.extend(window.dayjs_plugin_isBetween);
window.today = dayjs();

function prevWeek() {
    window.today = dayjs(window.today).subtract(1, "week");

    window.location = "?date=" + window.today.format("YYYY/MM/DD");
}

function nextWeek() {
    window.today = dayjs(window.today).add(1, "week");

    window.location = "?date=" + window.today.format("YYYY/MM/DD");
}
