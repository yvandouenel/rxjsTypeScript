import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { Data } from "./services/Data";
import BookInterface from "./interfaces/Book";
import Button from "./Components/Button";
import { Books } from "./Components/Books";
import Counter from "./Components/Counter";
import "./scss/imports.scss";

const button1 = new Button(document.getElementById("button"), "Bouton cliquable");
const obsBtn1 = button1.generateObservableFromClick();
button1.subscribeObservable(obsBtn1);

setTimeout(() => {
  const cpt1 = new Counter(document.getElementById("button"));
  cpt1.subscribeObservable(obsBtn1);
  const cpt2 = new Counter(document.getElementById("button"));
  cpt2.subscribeObservable(obsBtn1);
}, 2000);

const d = new Data();
const data: Observable<any> = d.getList();
const main_container = document.getElementById("root");

data.subscribe((books: BookInterface[]): void => {
  //const books = result.map((book: Book) => book);
  console.log(books);
  new Books(document.getElementById("books"), books);
});
const databis: Observable<any> = d.getList();

databis.subscribe((books): void => {
  //const books = result.map((book: Book) => book);
  console.log(books);
});

// Exemple d'observable créé par nos soins
/* const myObservable = new Observable((observer) => {
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
  error: (e) => {
    console.error(e);
    subscription.unsubscribe();
  },
  complete: () => {
    console.info("completed");
    subscription.unsubscribe();
  },
}); */
