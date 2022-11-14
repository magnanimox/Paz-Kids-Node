// Universal Shortcuts
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

// DayJs
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
    for (let i in arrDates) {
        arrDates[i].innerHTML =
            "<h4>" +
            dayjs(arrDates[i].innerText).format("DD/MMM/YYYY") +
            "</h4>";
        cards[i].style.display = "none";
    }

    let first = cards[0];
    return (first.style.display = "flex");
}

showTheFirst();
