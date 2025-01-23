import "./style.css";

const mainAppendDiv = document.getElementById("mainAppendDiv");
const loader = document.querySelector(".loader")
let countriesData = []; 

fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
        loader.style.display = "flex";
        countriesData = data; 
        getData(); 
        loader.style.display = "none";
    })
    .catch((err) => console.log(err));

function getData() {
    mainAppendDiv.innerHTML = "";
    const currentFilter = localStorage.getItem("filter") || "all";
    let filteredData = countriesData;

    if (currentFilter !== "all") {
        filteredData = countriesData.filter((element) =>
            element.continents.includes(currentFilter)
        );
    }

    filteredData.forEach((value) => {
        const flag = document.createElement("a");
        flag.classList.add("link");
        flag.href = "./info.html";
        flag.innerHTML = `
            <img src="${value?.flags?.png}" />
            <p>${value?.name?.common}</p>
        `;
        mainAppendDiv.appendChild(flag);

        flag.addEventListener("click", () => {
            localStorage.setItem("country", JSON.stringify(value));
        });
    });
}

// Search
const search = document.getElementById("search");
search.addEventListener("keyup", () => {
    const filter = search.value.toLowerCase();
    const link = document.querySelectorAll(".link");

    link.forEach((value) => {
        if (value.textContent.toLowerCase().includes(filter)) {
            value.style.display = "block";
        } else {
            value.style.display = "none";
        }
    });
});

// Filter 
const filterByContinent = document.getElementById("filterByContinentBox");
filterByContinent.addEventListener("click", (e) => {
    if (e.target.classList.contains("filterByContinent")) {
        const filterBtns = filterByContinent.querySelectorAll(".filterByContinent");
        filterBtns.forEach((btn) => btn.classList.remove("active"));
        e.target.classList.add("active");
        const filter = e.target.id;
        localStorage.setItem("filter", filter);
        getData();
    }
});
