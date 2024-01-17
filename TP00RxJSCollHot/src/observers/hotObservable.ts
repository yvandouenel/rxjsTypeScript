import { Subject } from "rxjs";

const hotObservable = new Subject();
let count = 0;
const timer = setInterval(() => {
  const data = Math.random();
  hotObservable.next(data);
  count++;
  if (count === 10) {
    clearInterval(timer);
  }
}, 1000);

export default hotObservable;

