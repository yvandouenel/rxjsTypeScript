import BookInterface from "../interfaces/Book";
import Book from "./Book";
import createMarkup from "../utils/domManagement";
export class Books {
  books: BookInterface[];
  private section_books: HTMLElement;
  constructor(main_container: HTMLElement, books: BookInterface[]) {
    this.section_books = createMarkup("section", "", main_container);
    this.books = books;
    this.render();
  }
  private render() {
    this.books.forEach((book) => {
      new Book(this.section_books, book.id, book.title);
    });
  }
}
