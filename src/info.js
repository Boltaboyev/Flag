import "./style.css"

const country = JSON.parse(localStorage.getItem("country"));

const countryName = document.getElementById("countryName");
const countryFlagImg = document.getElementById("countryFlagImg");
const countryFlagInfo = document.getElementById("countryFlagInfo");
const populationNum  = document.getElementById("populationNum");
const area = document.getElementById("area");
const capital = document.getElementById("capital");
const countryN = document.getElementById("countryN");
const continent = document.getElementById("continent");
const language = document.getElementById("language");
const neighbours = document.getElementById("neighbours");
const currency = document.getElementById("currency");
const timezones = document.getElementById("timezones");
const domain = document.getElementById("domain");
const fifa = document.getElementById("fifa");

console.log(populationNum);



countryName.innerHTML = country?.name?.common;
countryFlagImg.src = country?.flags?.png;
countryFlagInfo.textContent = country?.flags?.alt;
populationNum.textContent = country?.population.toLocaleString("").replace(/,/g, " ")
area.textContent = `${country?.area.toLocaleString("").replace(/,/g, " ")} km²`;
capital.textContent = country?.capital;
countryN.textContent = country?.name?.common;
continent.textContent = country?.region;
language.textContent = Object.values(country?.languages).join(" , ");
neighbours.textContent = country?.borders.join(" , ");
currency.textContent = Object.values(country?.currencies).map((currency) => `${currency.name} (${currency.symbol})`);
timezones.textContent = country?.timezones;
domain.textContent = country?.tld;
fifa.textContent = country?.fifa;