// Universal Shortcuts
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

let stateId = "";
let regionId = "";
let cityId = "";

// getRegions();
getRegions();
getCities();
getChurches();

// Arrays
let regions = [];
let cities = [];
let citiesPerState = [];
let citiesPerRegion = [];
let churches = [];
let churchesPerCity = [];
let regionsForPara = [];

// Handles
function handleState(event) {
    stateId = parseInt(event);

    if (stateId == 14) {
        document.querySelector(".coluna #region").style.display = "block";
        regionsForPara.length = 0;
        cleanRegionList();
        citiesPerState.length = 0;
        cleanCityList();
        churchesPerCity.length = 0;
        cleanChurchList();
        printRegionsForPara();
        return;
    } else {
        document.querySelector(".coluna #region").style.display = "none";
    }

    citiesPerState.length = 0;
    cleanCityList();
    churchesPerCity.length = 0;
    cleanChurchList();
    makeCityList();
    printCitiesPerState();
}

function handleRegion(event) {
    regionId = parseInt(event);
    citiesPerRegion.length = 0;
    cleanCityList();
    churchesPerCity.length = 0;
    cleanChurchList();
    makeCityListForRegions();
    printCitiesPerRegion();
}

function handleCity(event) {
    cityId = parseInt(event);
    churchesPerCity.length = 0;
    cleanChurchList();
    makeChurchList();
    printChurchesPerCity();
}

// JSON's
async function getRegions() {
    await fetch("https://pazkids.com.br/user/regions")
        .then((data) => {
            return data.json();
        })
        .then((json) => {
            regions = json;
        })
        .catch((error) => {
            console.log("Deu problema");
        });
}

async function getCities() {
    await fetch("https://pazkids.com.br/user/cities")
        .then((data) => {
            return data.json();
        })
        .then((json) => {
            cities = json;
        })
        .catch((error) => {
            console.log("Deu problema");
        });
}

async function getChurches() {
    await fetch("https://pazkids.com.br/user/churches")
        .then((data) => {
            return data.json();
        })
        .then((json) => {
            churches = json;
        })
        .catch((error) => {
            console.log("Deu problema");
        });
}

// Bars to inner.HTML
let eleRegion = document.getElementById("id_region");
let eleCity = document.getElementById("id_city");
let eleChurch = document.getElementById("id_church");

// Populate the right regions array
function makeRegionList() {
    for (let i = 0; i < regions.length; i++) {
        regions.push(regions[i]);
    }

    regions.sort(function (a, b) {
        return a.regions < b.regions ? -1 : a.regions > b.regions ? 1 : 0;
    });
}

// Populate the right cities array
function makeCityListForRegions() {
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].id_region === regionId) {
            citiesPerRegion.push(cities[i]);
        } else {
        }
    }

    citiesPerRegion.sort(function (a, b) {
        return a.city < b.city ? -1 : a.city > b.city ? 1 : 0;
    });
}

// Populate the right cities array
function makeCityList() {
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].id_state === stateId) {
            citiesPerState.push(cities[i]);
        } else {
        }
    }

    citiesPerState.sort(function (a, b) {
        return a.city < b.city ? -1 : a.city > b.city ? 1 : 0;
    });
}

// Populate the right churches array
function makeChurchList() {
    for (let i = 0; i < churches.length; i++) {
        if (churches[i].id_city === cityId) {
            churchesPerCity.push(churches[i]);
        } else {
        }
    }

    churchesPerCity.sort(function (a, b) {
        return a.church < b.church ? -1 : a.church > b.church ? 1 : 0;
    });
}

// Populate cities bar
function printRegionsForPara() {
    for (let i = 0; i < regions.length; i++) {
        eleRegion.innerHTML =
            eleRegion.innerHTML +
            '<option value="' +
            regions[i].id +
            '">' +
            regions[i].region +
            "</option>";
    }
}

// Populate cities bar
function printCitiesPerRegion() {
    for (let i = 0; i < citiesPerRegion.length; i++) {
        eleCity.innerHTML =
            eleCity.innerHTML +
            '<option value="' +
            citiesPerRegion[i].id +
            '">' +
            citiesPerRegion[i].city +
            "</option>";
    }
}

// Populate cities bar
function printCitiesPerState() {
    for (let i = 0; i < citiesPerState.length; i++) {
        eleCity.innerHTML =
            eleCity.innerHTML +
            '<option value="' +
            citiesPerState[i].id +
            '">' +
            citiesPerState[i].city +
            "</option>";
    }
}

// Populate churches bar
function printChurchesPerCity() {
    for (let i = 0; i < churchesPerCity.length; i++) {
        eleChurch.innerHTML =
            eleChurch.innerHTML +
            '<option value="' +
            churchesPerCity[i].id +
            '">' +
            churchesPerCity[i].church +
            "</option>";
    }
}

function cleanRegionList() {
    eleRegion.innerHTML = "<option value='9999'>Selecione uma Base</option>";
}

function cleanCityList() {
    eleCity.innerHTML = "<option value='9999'>Selecione uma Cidade</option>";
}

function cleanChurchList() {
    eleChurch.innerHTML = "<option value='9999'>Selecione uma Igreja</option>";
}

// isPazChurch
let isPazChurchBtn = document.querySelectorAll("input[name='isPazChurch']");
let enabledSettings = [];

if (enabledSettings == "") {
    c("#city").style.display = "block";
    c("#church").style.display = "block";
    c("#cityName").style.display = "none";
    c("#churchName").style.display = "none";
}

isPazChurchBtn.forEach((button) => {
    button.addEventListener("change", function () {
        enabledSettings = Array.from(isPazChurchBtn) // Convert checkboxes to an array to use filter and map.
            .filter((i) => i.checked) // Use Array.filter to remove unchecked checkboxes.
            .map((i) => i.value); // Use Array.map to extract only the checkbox values from the array of objects.

        if (enabledSettings == "1") {
            c("#city").style.display = "block";
            c("#church").style.display = "block";
            c("#cityName").style.display = "none";
            c("#churchName").style.display = "none";
        } else {
            c("#city").style.display = "none";
            c("#church").style.display = "none";
            c("#cityName").style.display = "block";
            c("#churchName").style.display = "block";
        }
    });
});

// Intl Tel Input
var input = c("#phone");

var validMsg = c("#valid-msg");
var errorMsg = c("#error-msg");

var errorMap = [
    "Número inválido",
    "Código de País Inválido",
    "Muito pequeno",
    "Muito grande",
    "Número Inválido",
];

var iti = intlTelInput(input, {
    initialCountry: "br",
    nationalMode: true,
    utilsScript: "/js/intl-tel-inputs/utils.js",
});

var reset = function () {
    input.classList.remove("error");
    errorMsg.innerHTML = "";
    errorMsg.classList.add("hide");
    validMsg.classList.add("hide");
};

input.addEventListener("blur", function () {
    reset();
    if (input.value.trim()) {
        if (iti.isValidNumber()) {
            validMsg.classList.remove("hide");
        } else {
            input.classList.add("error");
            var errorCode = iti.getValidationError();
            errorMsg.innerHTML = errorMap[errorCode];
            errorMsg.classList.remove("hide");
        }
    }
});

input.addEventListener("change", reset);
input.addEventListener("keyup", reset);

// Confirm Password
function checkPassword() {
    const password = document.querySelector("input[name=password]");
    const confirm_password = document.querySelector(
        "input[name=confirm_password]"
    );

    if (confirm_password.value === password.value) {
        confirm_password.setCustomValidity("");
    } else {
        confirm_password.setCustomValidity("As senhas não conferem");
    }
}
