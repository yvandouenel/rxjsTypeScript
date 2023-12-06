import CountryInput from "./components/CountryInput";
import Countries from "./components/Countries";
const appDiv = document.getElementById("app");
const countryInput = new CountryInput(appDiv);
new Countries(appDiv, countryInput.countryList$);