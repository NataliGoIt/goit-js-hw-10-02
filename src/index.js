import "../css/styles.css";
// import { fetch } from "./fetchCountries";
// import Notiflix from "notiflix";
const DEBOUNCE_DELAY = 300;
// console.log(fetch);
const inputCountre = document.querySelector("#search-box"),
  countryList = document.querySelector(".country-list"),
  countryInfo = document.querySelector(".country-info");
// console.log(inputCountre);
// console.log(countryList);
// console.log(countryInfo);
inputCountre.addEventListener("input", inputEntry);
function inputEntry(e) {
  console.log(e.values);
}
console.log(panjngjber);
fetch("https://restcountries.com/v3.1/all")
  .then((response) => {
    return response.json();
  })
  .then((el) => {
    markUpCountre(el);
  })
  .catch((error) => {
    console.log(error);
  });
function markUpCountre(e) {
  const markUp = e
    .map(
      ({ name, capital, population, languages, flags } = el) =>
        `<li class="country-item">
            <ul  class = "countri-description">
            <li class = "countri-description-item">
          
            <img src=${flags.svg} class="ikon" width="50"/>
            <span class = "countre-name">${name.official}</span>
            <span class = "countre-capital">${capital}</span>
            <span class = "countre-population">${population}</span>
            <span class = "countre-languages">${Object.values(languages)}</span>
             </li>
             </ul>
          </li>`
    )
    .join("");
  countryList.innerHTML = markUp;

  // console.log(markUp);
}
// ``;
// <svg class="ikon" width="40" height="40">
//               <use href=${flags.svg}></use>
//           </svg>
