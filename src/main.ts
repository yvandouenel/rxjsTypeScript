import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { Data } from "./services/Data";
import BookInterface from "./interfaces/Book";
import { Books } from "./Components/Books";
import './scss/imports.scss';

const d = new Data();
const data: Observable<any> = d.getList();
const main_container = document.getElementById("root");

data.subscribe((books:BookInterface[]): void => {
  //const books = result.map((book: Book) => book);
  console.log(books);
  new Books(main_container, books);
});
const databis: Observable<any> = d.getList();

databis.subscribe((books): void => {
  //const books = result.map((book: Book) => book);
  console.log(books);
});

// Exemple d'observable créé par nos soins
const myObservable = new Observable((observer) => {
  let count = 0;
  const timer = setInterval(() => {
    observer.next(count);
    count++;
    if (count === 10) {
      observer.complete();
      clearInterval(timer);
    }
  }, 1000);
});
const even = myObservable.pipe(filter((num:number) => num % 2 === 0));
const subscription = even.subscribe({
  next: (v) => console.log(v),
  error: (e) => console.error(e),
  complete: () => {
    console.info("completed");
    subscription.unsubscribe();
  },
});
