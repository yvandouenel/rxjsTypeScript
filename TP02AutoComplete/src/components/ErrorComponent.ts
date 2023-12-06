import { Observable } from "rxjs";
import { createMarkup } from "../utils/utils";
import ErrorService from "../services/ErrorService";

export default class ErrorComponent {
  domParent;

  constructor(domParent: HTMLElement) {
    this.domParent = domParent;

    const errorService = ErrorService.getInstance();

    // Subscribe to the error Observable
    errorService.getErrorObservable().subscribe({
      next: (error: Error) => {
        console.error("Récupération de l'erreur dans ErrorComponent :", error);
        // Handle the error here
        const errorMsgMarkup = this.render(error.message);
        const newspaperSpinning = [
          { height: '100px', opacity: 1, offset: 0 },
          { height: '0px', opacity: 0, offset: 1 }
        ];
        
        const newspaperTiming = {
          duration: 4000,
          iterations: 1,
        };
        errorMsgMarkup.animate(newspaperSpinning, newspaperTiming);
        setTimeout(() => {
          this.render("");
        }, 4000);
      },
    });
  }
  render(message: string) {
    let errorMsgMarkup: HTMLElement = document.createElement("h1");
    if (document.getElementById("error")) {
      document.getElementById("error").remove();
    }
    if (message) {
      errorMsgMarkup = createMarkup("h1", `Erreur survenue :  ${message}`, this.domParent, [
        { id: "error" },
      ]);
    }
    return errorMsgMarkup;
  }
  
  
}
