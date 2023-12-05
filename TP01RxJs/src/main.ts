import { Observable } from "rxjs";

import { Data } from "./services/Data";
import BookInterface from "./interfaces/Book";
import Button from "./Components/Button";
import { Books } from "./Components/Books";
import Counter from "./Components/Counter";
import "./scss/imports.scss";

// Premier énoncé : On crée un bout on avec pour label "Créer premier observable"
// Au click sur ce bouton, on souscrit à l'observable issu de createCustomObservable()
const button1 = new Button(document.getElementById("own-observable"), "Créer premier observable");
button1.button_elt.onclick = () => {
  button1.createCustomObservable().subscribe((x) => console.log(x));
  //button1.subscribeCustomObservable(button1.createCustomObservable());
}


// Deuxième énoncé  
const button2 = new Button(document.getElementById("button"), "+1");
const obsBtn2 = button2.generateObservableFromClick();
button2.subscribeObservable(obsBtn2);

setTimeout(() => {
  const cpt1 = new Counter(document.getElementById("button"));
  cpt1.subscribeObservable(obsBtn2);
  
}, 1000);
setTimeout(() => {
  const cpt2 = new Counter(document.getElementById("button"));
  cpt2.subscribeObservable(obsBtn2);
}, 4000);

const d = new Data();
const data: Observable<any> = d.getList();
const main_container = document.getElementById("root");

data.subscribe((books: BookInterface[]): void => {
  //const books = result.map((book: Book) => book);
  console.log(books);
  new Books(document.getElementById("books"), books);
});
const databis: Observable<any> = d.getList();

databis.subscribe((books:  BookInterface[]): void => {
  new Books(document.getElementById("books"), books);
});

