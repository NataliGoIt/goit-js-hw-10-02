import "../css/styles.css";
import { fetchCountries } from "./fetchCountries";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import debounce from "lodash.debounce";
const DEBOUNCE_DELAY = 300;
// // console.log(fetch);
const inputCountre = document.querySelector("#search-box"),
  countryList = document.querySelector(".country-list"),
  countryInfo = document.querySelector(".country-info");

inputCountre.addEventListener("input", debounce(inputEntry, DEBOUNCE_DELAY));
function inputEntry(e) {
  const value = e.target.value.trim();

  if (value.length > 0) {
    fetchCountries(value).then(fetchOk).catch(fetchError);
  }
  countryInfo.innerHTML = "";
  countryList.innerHTML = "";
}

function fetchError(error) {
  Notify.failure("Oops, there is no country with that name");
}
function fetchOk(el) {
  rendedrCard(el);
}
function rendedrCard(e) {
  countryInfo.innerHTML = "";
  countryList.innerHTML = "";
  if (e.length > 10) {
    Notify.info("Too many matches found. Please enter a more specific name.");
    return;
  } else if (e.length >= 2 && e.length <= 10) {
    const markUp = e
      .map(
        ({ name, flags } = e) =>
          `     <li class = "countri-item">
                <img src=${flags.svg} class="ikon" alt = "Flag ${name.official}" width="50"/>
                <h2 class = "countre-name">${name.official}</h2>
                 </li>`
      )
      .join("");
    countryList.innerHTML = markUp;
  } else if (e.length === 1) {
    const [{ name, capital, population, flags, languages }] = e;
    console.log(name);
    countryInfo.innerHTML = `
            
            <li class = "countri-description-item">

            <img src=${flags.svg} class="ikon" width="50"/>
            <h2 class = "countre-name">${name.official}</h2>
            <span class = "countre-capital">${capital}</span>
            <span class = "countre-population">${population}</span>
         <span class="countre-languages">${Object.values(languages)}</span>;
             </li>
      `;
  }
}
