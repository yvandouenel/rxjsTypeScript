import CountryInput from "./components/CountryInput";
import Countries from "./components/Countries";
import ErrorComponent from "./components/ErrorComponent";
const appDiv = document.getElementById("app");
const errorComponent = new ErrorComponent(appDiv);
const countryInput = new CountryInput(appDiv);
new Countries(appDiv, countryInput.countryList$);