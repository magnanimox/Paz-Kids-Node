function prevWeek() {
    if (indexEp > 0) {
        indexEp = indexEp - 1;
    }

    for (i = 0; i < arrDates.length; i++) {
        if (cards[i].style.display == "flex") {
            cards[i].style.display = "none";
            cards[indexEp].style.display = "flex";
        }
    }
    console.log(indexEp);
}

function nextWeek() {
    if (indexEp < arrDates.length - 1) {
        indexEp = indexEp + 1;
    }

    for (i = 0; i < arrDates.length - 1; i++) {
        if (cards[i].style.display == "flex") {
            cards[i].style.display = "none";
            cards[indexEp].style.display = "flex";
        }
    }
    console.log(indexEp);
}
