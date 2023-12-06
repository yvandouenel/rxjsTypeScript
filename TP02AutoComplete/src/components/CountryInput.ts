import { Observable, fromEvent, of } from "rxjs";
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from "rxjs/operators";
import CountryInputInterface from "../interfaces/CoutryInputInterface";
import getData from "../services/getData";
import {createMarkup} from '../utils/utils'

export default class CountryInput implements CountryInputInterface {
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
    if (inputElt instanceof HTMLInputElement ) {
      // inputElt is an HTMLInputElement
      return inputElt;
    }
    return null;
  }
  getObservableCountries() {
    //create observable that emits input events
    const source$ = fromEvent(this.input, "input").pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((ev) => {
        if (ev.target instanceof HTMLInputElement ) {
          return of(ev.target.value);
        }
      }),
      filter((name) => name.length > 2),
      switchMap((name) => {
        return getData(name);
      })
    );
    //const subscribe = source$.subscribe(val => console.log(val));
    return source$;
  }
  
}
