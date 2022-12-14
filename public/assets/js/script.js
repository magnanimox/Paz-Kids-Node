// Universal Shortcuts
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

// DayJs
dayjs.extend(window.dayjs_plugin_isBetween);
dayjs.locale("pt-br");
let today = dayjs();
let monthName = today.format("MMMM");
let currentMonth = dayjs().month();

// Menu > Assista; Prevent Default
c(".menu .dropdown a").addEventListener("click", function (event) {
    event.preventDefault();
    if (c(".menu .dropdown-menu").style.display == "flex") {
        c(".menu .dropdown-menu").style.display = "none";
    } else {
        c(".menu .dropdown-menu").style.display = "flex";
    }
});

// Actual Terra Prometida Cards
let cards = cs(".cardTp");
let dates = cs(".cardTp .week-actual");
let arrDates = Array.from(dates);
let indexEp = 0;

function showTheFirst() {
    for (i = 0; i < arrDates.length; i++) {
        const episodeDate = dayjs(arrDates[i].innerText);
        const start = episodeDate.subtract(2, "day").format("YYYY/MM/DD");
        const end = episodeDate.add(4, "day").format("YYYY/MM/DD");

        if (today.isBetween(start, end, "day", "[]")) {
            indexEp = i;
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
        arrDates[i].innerHTML =
            "<h4>" +
            dayjs(arrDates[i].innerText).format("DD/MMM/YYYY") +
            "</h4>";
    }
}

showTheFirst();

// PREV and NEXT - Terra Prometida Cards
let cardsPN = cs(".cardTpPN");
let datesPN = cs(".cardTpPN .week-actual");
let arrDatesPN = Array.from(datesPN);
let indexEpPN = 0;

function showTheFirstPN() {
    for (let i in arrDatesPN) {
        arrDatesPN[i].innerHTML =
            "<h4>" +
            dayjs(arrDatesPN[i].innerText).format("DD/MMM/YYYY") +
            "</h4>";
        cardsPN[i].style.display = "none";
    }

    let firstPN = cardsPN[0];
    if (firstPN != null) {
        firstPN.style.display = "flex";
    } else {
        return;
    }
}

showTheFirstPN();

// Botões de Download

let allDownButtons = cs(".episode-buttons a");

function openModal(e) {
    e.preventDefault();
    c(".modal-login").style.opacity = 0;
    c(".modal-login").style.display = "flex";
    setTimeout(() => {
        c(".modal-login").style.opacity = 1;
    }, 200);
}

function closeModal() {
    c(".modal-login").style.opacity = 0;
    setTimeout(() => {
        c(".modal-login").style.display = "none";
    }, 500);
}
