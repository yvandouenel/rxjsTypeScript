import { fromEvent, of } from "rxjs";
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
} from "rxjs/operators";
import CountryInputInterface from "../interfaces/CoutryInputInterface";

import loadCountries from "../services/loadCountries";
import { createMarkup } from "../utils/utils";

export default class CountryInputComponent implements CountryInputInterface {
  domParent;
  input;
  countryList$;
  constructor(domParent: HTMLElement) {
    this.domParent = domParent;
    this.input = this.render();
    this.countryList$ = this.getObservableCountries();
  }
  render(): HTMLInputElement {
    const inputElt = createMarkup("input", "", this.domParent, [
      { type: "text" },
    ]);
    if (inputElt instanceof HTMLInputElement) {
      // inputElt is an HTMLInputElement
      return inputElt;
    }
    return null;
  }
  getObservableCountries() {
    //create observable that emits input events
    const source$ = fromEvent(this.input, "input").pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((ev) => {
        if (ev.target instanceof HTMLInputElement) {
          return of(ev.target.value);
        }
      }),
      filter((name) => name.length > 2),
      switchMap((name) => {
        return loadCountries(name);
      }),
      catchError((error: any) => {
        console.error("Erreur attrapée dans CountryInput :", error);
        // Gestion de l'erreur
        // On peut retourner un nouvel observable si l'on veut faire en sorte que l'erreur ne termine pas l'observable
        return of([]);
      })
    );
    //const subscribe = source$.subscribe(val => console.log(val));
    return source$;
  }
}
