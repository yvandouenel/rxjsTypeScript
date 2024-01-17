import { Observable, from } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { switchMap, of, catchError } from "rxjs";
import CountryInterface from "../interfaces/CountryInterface";
import ErrorService from "./ErrorService";

/* export default function loadCountries (name: string):Observable<CountryInterface[]> {
  const errorService = ErrorService.getInstance();
  return from(
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) => {
      if(response.status == 404) {
        errorService.emitError(new Error('erreur 404'));
        return [];
      }
      return response.json();
    })
    .then(data => {
      console.log(`data : `, data);
      return data;
    })
  );
}; */
export default function loadCountries(name: string): Observable<CountryInterface[]> {
  const errorService = ErrorService.getInstance();
  return fromFetch(`https://restcountries.com/v3.1/name/${name}`).pipe(
    switchMap(response => {
      if (response.status == 404) {
        console.log(`fromFetch response.status == 404`);
        errorService.emitError(new Error('erreur 404'));
        // Server is returning a status requiring the client to try something else.
        return of([]);
      } else {
        return response.json();
      }
    }),
    catchError((err) => {
      // Network or other error, handle appropriately
      errorService.emitError(new Error(err));
      return [];
    })
  );
}

