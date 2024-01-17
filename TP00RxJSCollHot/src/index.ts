import coldObservable from "./observers/coldObservable";
import hotObservable from "./observers/hotObservable";

const buttonColdObs = document.getElementById("cold-observable");
buttonColdObs.onclick = function () {
  coldObservable.subscribe({
    next: (v) => console.log("valeur " + v),
    error: (e) => console.error(e),
    complete: () => {
      console.info("completed");
    },
  });
};
const buttonHotObs = document.getElementById("hot-observable");
buttonHotObs.onclick = function () {
  hotObservable.subscribe({
    next: (v) => console.log("valeur " + v),
    error: (e) => console.error(e),
    complete: () => {
      console.info("completed");
    },
  });
};

/* import { Subject, shareReplay } from "rxjs";

const subject = new Subject();

// Create a cold Observable from the Subject
const coldObservable = subject.asObservable().pipe(
  shareReplay()
);

// Emit values from the Subject
let count = 0;
const timer = setInterval(() => {
  subject.next(Math.random());
  count++;
  if (count === 5) {
    subject.complete();
    clearInterval(timer);
  }
}, 1000);

coldObservable.subscribe((data) => console.log("Observer 1:", data));

setTimeout(() => {
  coldObservable.subscribe((data) => console.log("Observer 2:", data));
}, 3000); */
