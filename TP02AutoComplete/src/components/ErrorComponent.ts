import { Observable } from "rxjs";
import { createMarkup } from "../utils/utils";
import ErrorService from "../services/ErrorService";

export default class ErrorComponent {
  domParent;

  constructor(
    domParent: HTMLElement,
  ) {
    this.domParent = domParent;
    
    const errorService = ErrorService.getInstance();

    // Subscribe to the error Observable
    errorService.getErrorObservable().subscribe({
      next: (error: Error) => {
        console.error("Récupération de l'erreur ici :", error);
        // Handle the error here
        this.render(error.message);
      },
    });
    
  }
  render(message:string) {
    if (message) {
      if (document.getElementById("error")) {
        document.getElementById("error").remove();
      }
      createMarkup(
        "h1",
        `Erreur survenue :  ${message}`,
        this.domParent,
        [{ id: "error" }]
      );
    }
    
  }
}
