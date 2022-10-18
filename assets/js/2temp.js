// Episodes
window.episodesTp = [];
window.episodesTp2 = [];

// Fetch: Terra Prometida
const getEpisodesTp = async () => {
    return await fetch("assets/json/tpEpisodes.json").then((data) =>
        data.json()
    );
};

getEpisodesTp().then((episodesTp) => {
    // populate
    window.episodesTp = episodesTp;

    // populate Tp2
    for (let i in window.episodesTp) {
        if (window.episodesTp[i].temp === 2) {
            window.episodesTp2.push(episodesTp[i]);
        }
    }

    // render Tp2
    window.episodesTp2.forEach((item) => {
        let episodeCard = c(".section-area .terra-prometida").cloneNode(true);

        episodeCard.querySelector("#thumb img").src = item.img;
        episodeCard.querySelector("#ep").innerHTML = item.episodio;
        episodeCard.querySelector("#name").innerHTML = item.name;
        episodeCard.querySelector("#download a").href = item.download;
        episodeCard.querySelector("#slides a").href = item.slides;
        episodeCard.querySelector("#youtube a").href = item.youtube;
        episodeCard.querySelector("#lifekids a").href = item.lifekids;

        c(".episodes-append-tp2").append(episodeCard);
    });
});
