import createMarkup from "../utils/domManagement";
import { fromEvent, Observable } from "rxjs";
import { map, scan, shareReplay, filter } from "rxjs/operators";
export default class Button {
  private button_section: HTMLElement;
  private title: string;
  button_elt: HTMLElement;
  constructor(button_section: HTMLElement, title: string) {
    this.button_section = button_section;
    this.title = title;
    this.button_elt = this.render();
    this.generateObservableFromClick();
  }
  private render() {
    const btn = createMarkup("button", this.title, this.button_section, [
      { class: "btn btn-warning mx-2" },
    ]);
    return btn;
  }
  generateObservableFromClick(): Observable<number> {
    console.log(`Dans handleEvents`);
    const clicks$ = fromEvent(this.button_elt, "click").pipe(
      map((event) => 1),
      scan((count) => count + 1),
      // shareReplay()// Si shareReplay est activé, l'observable devient "hot" sinon, il est "cold"
    );
    return clicks$;
  }
  subscribeObservable(obs$: Observable<number>): void {
    obs$.subscribe((x) => console.log(x));
  }
  createCustomObservable() {
    return new Observable((observer) => {
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
  }
  subscribeCustomObservable(myObservable:Observable<any>) {
    const even = myObservable.pipe(filter((num: number) => num % 2 === 0));
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
    });
  }
}
