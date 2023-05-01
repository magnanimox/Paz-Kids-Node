document.getElementById("tp-download").addEventListener("click", function () {
    gtag("event", "download-counter", { debug_mode: true });
});

document.getElementById("tp-slides").addEventListener("click", function () {
    gtag("event", "slides-counter", { debug_mode: true });
});

document.getElementById("tp-youtube").addEventListener("click", function () {
    gtag("event", "youtube-counter", { debug_mode: true });
});

document.getElementById("tp-lifekids").addEventListener("click", function () {
    gtag("event", "lifekids-counter", { debug_mode: true });
});
