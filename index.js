import "./css/styles.css";
// import { fetch } from "./fetchCountries";
import Notiflix from "notiflix";
const DEBOUNCE_DELAY = 300;
// console.log(fetch);
fetch("https://restcountries.com/v3.1/all").then(console.log);
