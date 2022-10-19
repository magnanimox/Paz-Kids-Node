// Dayjs
dayjs.locale("pt-br");
dayjs.extend(window.dayjs_plugin_isBetween);
window.today = dayjs();
window.month = dayjs().month();
window.monthName = dayjs().format("MMMM");

// Month on Page
c(".prog-month h4").innerHTML = monthName;

// Episodes
window.episodesTp = [];
window.episodesTp1 = [];
window.episodesTpCurrentMonth = [];
window.episodesAb = [];

// Fetch: Aventura Bíblica
const getEpisodesAb = async () => {
    return await fetch("assets/json/abEpisodes.json").then((data) =>
        data.json()
    );
};

// Fetch: Terra Prometida
const getEpisodesTp = async () => {
    return await fetch("assets/json/tpEpisodes.json").then((data) =>
        data.json()
    );
};

// Render: Aventura Bíblica
function renderEpisodeAb(data, type = ".aventura-biblica") {
    // check
    if (data == null) return;

    c(type + " .episode-title h4").innerHTML = data.name;
    c(type + " .thumbnail img").src = data.img;
    c(type + " .bt-download.item-1 a").href = data.download;
    c(type + " .bt-material.item-2 a").href = data.materiais;
}

// Render: Terra Prometida
function renderEpisodeTp(data, type = ".terra-prometida") {
    // check
    if (data == null) return;

    c(type + " .episode-title h4").innerHTML = data.name;
    c(type + " .thumbnail img").src = data.img;
    c(type + " .bt-download.item-1 a").href = data.download;
    c(type + " .bt-slides.item-2 a").href = data.slides;
    c(type + " .bt-youtube.item-3 a").href = data.youtube;
    c(type + " .bt-lifekids.item-4 a").href = data.lifekids;
    c(type + " .week-actual h4").innerHTML = dayjs(data.showAt).format(
        "DD/MMMM"
    );
}

// Get current episodes
function getCurrentTpEpisode(episodesTp) {
    return episodesTp.filter((data) => {
        // Convert date in dayjs
        const episodeDate = dayjs(data.showAt);
        // Get date of start period
        const start = episodeDate.subtract(2, "day").format("YYYY/MM/DD");
        // Get date of end period
        const end = episodeDate.add(4, "day").format("YYYY/MM/DD");
        // init
        let showThisEpisode = false;
        // logic
        if (window.today.isBetween(start, end, "day", "[]")) {
            showThisEpisode = true;
        }

        return showThisEpisode;
    })[0];
}

function getCurrentAbEpisode(episodesAb) {
    return episodesAb.filter((episodeAb) => {
        const episodeMonth = episodeAb.showAt;
        let showThisEpisode = false;

        // Check episode's month
        if (episodeMonth === month) {
            showThisEpisode = true;
        }
        return showThisEpisode;
    })[0];
}

function renderTp1(episodesTp) {
    window.episodesTp1.forEach((item) => {
        let episodeCard = c(".section-area .terra-prometida").cloneNode(true);

        episodeCard.querySelector("#thumb img").src = item.img;
        episodeCard.querySelector("#ep").innerHTML = item.episodio;
        episodeCard.querySelector("#name").innerHTML = item.name;
        episodeCard.querySelector("#download a").href = item.download;
        episodeCard.querySelector("#slides a").href = item.slides;
        episodeCard.querySelector("#youtube a").href = item.youtube;
        episodeCard.querySelector("#lifekids a").href = item.lifekids;

        c(".episodes-append-tp1").append(episodeCard);
    });
}

// populating consts
getEpisodesTp().then((episodesTp) => {
    //populate global
    window.episodesTp = episodesTp;

    const episodeToShow = getCurrentTpEpisode(episodesTp);

    renderEpisodeTp(episodeToShow);

    // populate Tp1
    for (let i in window.episodesTp) {
        if (window.episodesTp[i].temp === 1) {
            window.episodesTp1.push(episodesTp[i]);
        }
    }
});

getEpisodesAb().then((episodesAb) => {
    window.episodesAb = episodesAb;

    const episodeToShow = getCurrentAbEpisode(episodesAb);

    renderEpisodeAb(episodeToShow);
});

//Week buttons for Terra Prometida

function prevWeek() {
    window.today = dayjs(window.today).subtract(1, "week");

    const episodeToShow = getCurrentTpEpisode(episodesTp);

    renderEpisodeTp(episodeToShow);
}

function nextWeek() {
    window.today = dayjs(window.today).add(1, "week");

    const episodeToShow = getCurrentTpEpisode(episodesTp);

    renderEpisodeTp(episodeToShow);
}
