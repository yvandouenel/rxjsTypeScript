import { Subject, Observable } from 'rxjs';

export default class ErrorService {
  private static instance: ErrorService;
  private errorSubject: Subject<Error>;

  private constructor() {
    this.errorSubject = new Subject<Error>();
  }

  public static getInstance(): ErrorService {
    if (!ErrorService.instance) {
      ErrorService.instance = new ErrorService();
    }
    return ErrorService.instance;
  }

  getErrorObservable(): Observable<Error> {
    return this.errorSubject.asObservable();
  }

  emitError(error: Error): void {
    this.errorSubject.next(error);
  }
}