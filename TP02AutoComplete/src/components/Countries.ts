import { Observable } from "rxjs";
import CountryInterface from "../interfaces/CountryInterface";
import { createMarkup } from "../utils/utils";
export default class Countries {
  domParent;

  constructor(
    domParent: HTMLElement,
    countryList$: Observable<CountryInterface[]>
  ) {
    this.domParent = domParent;
    countryList$.subscribe({
      next: (countries: CountryInterface[]) => this.render(countries),
      error: (err: any) => {
        console.error("An error occurred:", err);
      },
      complete: () => {
        console.log("Observable completed");
      },
    });
  }
  render(countries: CountryInterface[]) {
    console.log(`countries`, countries);
    if (countries.length > 0) {
      if (document.getElementById("countries")) {
        document.getElementById("countries").remove();
      }
      const section = createMarkup("section", "", this.domParent, [
        { id: "countries" },
      ]);
      countries.forEach((country) => {
        console.log(`name : `, country.name.common);
        createMarkup("section", country.name.common, section);
      });
    } else {
      if (document.getElementById("countries")) {
        document.getElementById("countries").remove();
      }
      const section = createMarkup("section", "", this.domParent, [
        { id: "countries" },
      ]);
      createMarkup(
        "h1",
        "Aucun résultat ne correpond à votre recherche. Veuillez recommencer avec d'autres caractères.",
        section,
        [{ id: "countries" }]
      );
    }
  }
}
