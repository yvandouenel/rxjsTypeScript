import { Observable } from "rxjs";
const coldObservable = new Observable((observer) => {
  let count = 0;
  const timer = setInterval(() => {
    observer.next(count);
    count++;
    if (count === 5) {
      observer.complete();
      clearInterval(timer);
    }
  }, 1000);
});
export default coldObservable;