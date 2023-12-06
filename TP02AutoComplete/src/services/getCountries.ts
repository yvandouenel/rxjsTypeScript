import { Observable, from } from "rxjs";
import CountryInterface from "../interfaces/CountryInterface";
import ErrorService from "./ErrorService";

export default function getCountries (name: string):Observable<CountryInterface[]> {
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
};