import createMarkup from "../utils/domManagement";
export default class Book {
  private id: number;
  private title: string;
  private book_section: HTMLElement;
  private like;
  constructor(book_section: HTMLElement, id: number, title: string) {
    this.book_section = book_section;
    this.id = id;
    this.title = title;
    this.like = this.render();
    this.handleEvents();
  }
  private render() {
    const section_book = createMarkup("section",
      "",
      this.book_section,
      [{ class: "d-flex justify-content-between my-2" }]);
    const title_book = createMarkup("h2", this.title, section_book);
    const like = createMarkup("button", "J'aime", section_book, [{ class: "btn btn-success" }]);
    return like;
  }
  private handleEvents() {
    this.like.onclick = () => {
      console.log(`Like cliqué`);
    }
  }
}