// Episodes
window.episodesAb = [];

// Fetch: Aventura Bíblica
const getEpisodesAb = async () => {
    return await fetch("assets/json/abEpisodes.json").then((data) =>
        data.json()
    );
};

getEpisodesAb().then((episodesAb) => {
    window.episodesAb = episodesAb;

    window.episodesAb.forEach((item) => {
        let episodeCard = c(".section-area .aventura-biblica").cloneNode(true);

        episodeCard.querySelector("#thumb img").src = item.img;
        episodeCard.querySelector("#ep").innerHTML = item.id;
        episodeCard.querySelector("#name").innerHTML = item.name;
        episodeCard.querySelector("#download a").href = item.download;
        episodeCard.querySelector("#material a").href = item.material;

        c(".episodes-append").append(episodeCard);
    });
});
