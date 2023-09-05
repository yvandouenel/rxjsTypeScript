import { Observable} from 'rxjs';
import { Data } from './services/Data'
import Book from './interfaces/Book';

const d = new Data();
const data: Observable<any> = d.getList();

data.subscribe((result): void => {
  const books = result.map((book: Book) => book.title)
  console.log(books);
});
const databis: Observable<any> = d.getList();

databis.subscribe((result): void => {
  const books = result.map((book: Book) => book.title)
  console.log(books);
})