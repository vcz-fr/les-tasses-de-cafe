const searchParams = new URLSearchParams(location.search);
const fuzzySearchOptions = {
    isCaseSensitive: false,
    includeScore: false,
    shouldSort: true,
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 2,
    location: 0,
    threshold: 0.6,
    distance: 100,
    useExtendedSearch: false,
    ignoreLocation: true,
    ignoreFieldNorm: false,
    keys: [
        "title",
        "description",
        "rules"
    ]
};

let games = [];
const checkCheckboxGroup = (name) => {
    if (!searchParams.has(name)) {
        return;
    }
    const values = searchParams.getAll(name).filter(
        v => document.querySelector(`select[name=${name}] [value="${v}"]`) !== null
    );
    if (values.length > 0) {
        document.querySelector(`select[name=${name}]`).value = "";
        for (const value of values) {
            document.querySelector(`select[name=${name}] [value="${value}"]`).selected = true;
        }
    }
};

const intersect = (A, B) => {
    for (const elem of A) {
        if (B.includes(elem)) {
            return true;
        }
    }
    return false;
}

const doSearch = () => {
    const formData = new FormData(document.getElementById("search-form"));
    const filteredGames = games
        .filter(g => formData.get("genre") === "-" || intersect(g.genres, formData.getAll("genre")))
        .filter(g => formData.get("author") === "-" || intersect(g.authors, formData.getAll("author")))
        .filter(g => formData.get("duration") === "-" || intersect([g.duration], formData.getAll("duration")))
        .filter(g => formData.get("platform") === "-" || intersect([g.platform.where], formData.getAll("platform")));

    let results = filteredGames;
    if (formData.get("query") !== "") {
        const fuse = new Fuse(filteredGames, fuzzySearchOptions);
        results = fuse.search(formData.get("query")).map(r => r.item);
    }

    const resultDiv = document.getElementById("search-results");
    if (results.length > 0) {
        resultDiv.innerHTML = "";
        results.forEach(result => {
            const main = document.createElement("div");
            main.classList.add("search-result-item");

            const title = document.createElement("div");
            main.appendChild(title);

            const link = document.createElement("a");
            link.setAttribute("href", result.url);
            title.appendChild(link);

            const linkText = document.createTextNode(result.title);
            link.appendChild(linkText);

            const description = document.createElement("div");
            main.appendChild(description);

            const descriptionP = document.createElement("p");
            description.appendChild(descriptionP);

            const descriptionText = document.createTextNode(result.description);
            description.appendChild(descriptionText);

            resultDiv.appendChild(main);
        })
    } else {
        resultDiv.textContent = "Aucun résultat trouvé :/";
    }
}

fetch("/games.json").then(r => r.json()).then(r => {
    games = r;

    ["genre", "author", "duration", "platform"].forEach(checkCheckboxGroup);
    if (searchParams.has("query")) {
        document.getElementById("search-text").value = searchParams.get("query");
    }

    doSearch();
});

document.getElementById("form-submit").addEventListener('click', doSearch);
