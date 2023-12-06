import { Observable, from } from "rxjs";
import CountryInterface from "../interfaces/CountryInterface";
export default function getData (name: string):Observable<CountryInterface[]> {
  return from(
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) => {
      if(response.status == 404) {
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