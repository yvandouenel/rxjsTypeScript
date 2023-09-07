import createMarkup from "../utils/domManagement";
export default class Book {
  private id: number;
  private title: string;
  private book_section:HTMLElement;
  constructor(book_section:HTMLElement, id:number, title:string){
    this.book_section = book_section;
    this.id = id;
    this.title = title;
    this.render();
  }
  private render() {
    const section_book = createMarkup("section","",this.book_section);
    const title_book = createMarkup("h2",this.title,section_book);
  }
}