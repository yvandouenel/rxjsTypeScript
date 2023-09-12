import createMarkup from "../utils/domManagement";
import {  fromEvent,  Observable } from "rxjs";
import {
  map,
  scan,
  shareReplay,
} from "rxjs/operators";
export default class Button {
  private button_section: HTMLElement;
  private title: string;
  private button_elt: HTMLElement;
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
  generateObservableFromClick():Observable<number> {
    console.log(`Dans handleEvents`);
    const clicks$ = fromEvent(this.button_elt, "click").pipe(
      map((event) => 1),
      scan((count) => count + 1),
      shareReplay()
    );
    return clicks$;
  }
  subscribeObservable(obs$: Observable<number>):void {
    obs$.subscribe((x) => console.log(x));
  }
}
