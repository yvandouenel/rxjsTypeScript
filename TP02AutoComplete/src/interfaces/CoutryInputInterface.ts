import { Observable} from "rxjs";
import CountryInterface from './CountryInterface';
export default interface CountryInputInterface {
  domParent: HTMLElement;
  input: HTMLInputElement;
  countryList$:Observable<CountryInterface[]>
}