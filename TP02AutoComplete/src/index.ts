import CountryInputComponent from "./components/CountryInputComponent";
import CountriesListComponent from "./components/CountriesListComponent";
import ErrorComponent from "./components/ErrorComponent";
const appDiv = document.getElementById("app");

const countryInput = new CountryInputComponent(appDiv);
new CountriesListComponent(appDiv, countryInput.countryList$);
new ErrorComponent(appDiv);