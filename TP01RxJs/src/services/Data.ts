import { fromFetch } from "rxjs/fetch";
import { switchMap, catchError, shareReplay } from "rxjs/operators";

import { Observable, of } from "rxjs";
import Book from "../interfaces/Book";
export class Data {
  list: Observable<Book>;
  url: string;
  constructor() {
    this.url = "http://localhost:3000/books";
    this.list = this.buildRequestObservale();
  }
  buildRequestObservale() {
    console.log('Nouvelle requête http avec fetch');
    return fromFetch("http://localhost:3000/books").pipe(
      // switchMap : la seule réponse qui nous intéresse est la dernière
      switchMap((response) => {
        if (response.ok) {
          console.log(`Reponse ok`);
          return response.json()
        }
        else return of({ error: true, message: `Error ${response.status}` })
      }),
      // shareReplay va renvoyer le dernier résultat sans que la requête soit à nouveau exécutée
      shareReplay(1),
      catchError((err) => {
        console.error(err)
        return of({ error: true, message: err.message })
      })
    );
  }

  getList(): Observable<Book> {
    return this.list;
  }
}
