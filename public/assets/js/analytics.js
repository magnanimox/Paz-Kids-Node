document.getElementById("ab-download").addEventListener("click", function () {
    gtag("event", "ab-download-counter");
});

document.getElementById("ab-materiais").addEventListener("click", function () {
    gtag("event", "ab-materiais-counter");
});

document.querySelectorAll(".download-counter").forEach(function (element) {
    element.addEventListener("click", function () {
        gtag("event", "tp-download-counter");
    });
});

document.querySelectorAll(".slides-counter").forEach(function (element) {
    element.addEventListener("click", function () {
        gtag("event", "tp-slides-counter");
    });
});

document.querySelectorAll(".youtube-counter").forEach(function (element) {
    element.addEventListener("click", function () {
        gtag("event", "tp-youtube-counter");
    });
});

document.querySelectorAll(".lifekids-counter").forEach(function (element) {
    element.addEventListener("click", function () {
        gtag("event", "tp-lifekids-counter");
    });
});
