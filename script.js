const access = "rOWBESYL2Qmh0wa3QkTbc-p2dhYi1W2UHhg_8RIMmvU";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search");
const searchResult = document.querySelector(".search-resss");

let inputData = "";
let page=1;

async function getImages() {
    inputData = inputEl.value;

    if(page===1){
        searchResult.innerHTML="";
    }

    const url = `https://api.unsplash.com/search/photos?query=${inputData}&client_id=${access}`;
    
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    results.forEach((val) => {
        const imgWrap = document.createElement("div");
        imgWrap.classList.add("searchres");

        const img = document.createElement("img");
        img.src = val.urls.small;
        img.alt = val.alt_description;

        const imgLink = document.createElement("a");
        imgLink.href = val.links.html;
        imgLink.textContent=val.alt_description;

        imgWrap.appendChild(img);
        imgWrap.appendChild(imgLink);

        searchResult.appendChild(imgWrap);
    });
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    getImages();
});
