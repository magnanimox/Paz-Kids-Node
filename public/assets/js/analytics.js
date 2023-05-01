document
    .getElementsByClassName("download-counter")
    .addEventListener("click", function () {
        gtag("event", "download-counter", { debug_mode: true });
    });

document
    .getElementsByClassName("slides-counter")
    .addEventListener("click", function () {
        gtag("event", "slides-counter", { debug_mode: true });
    });

document
    .getElementsByClassName("youtube-counter")
    .addEventListener("click", function () {
        gtag("event", "youtube-counter", { debug_mode: true });
    });

document
    .getElementsByClassName("lifekids-counter")
    .addEventListener("click", function () {
        gtag("event", "lifekids-counter", { debug_mode: true });
    });
