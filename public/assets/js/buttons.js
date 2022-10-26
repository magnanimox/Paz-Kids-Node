// Dayjs
dayjs.locale("pt-br");
window.today = dayjs();

function prevMonth() {
    // window.today = dayjs(window.today).subtract(1, "week");
    alert("Você voltou um mês!");
}

function nextMonth() {
    // window.today = dayjs(window.today).add(1, "week");
    alert("Você adiantou um mês!");
}

function prevWeek() {
    // window.today = dayjs(window.today).subtract(1, "week");
    alert("Você voltou uma semana!");
}

function nextWeek() {
    // window.today = dayjs(window.today).add(1, "week");
    alert("Você adiantou uma semana!");
}
