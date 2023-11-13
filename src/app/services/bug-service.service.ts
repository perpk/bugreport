import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Bug } from '../common/Bug';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BugServiceService {
  private static DOMAIN = 'http://localhost:3000';
  private static BUGS_CONTEXT = '/bugs';

  constructor(private http: HttpClient) {}

  getBugs(): Observable<Bug[]> {
    return this.http
      .get<Bug[]>(
        `${BugServiceService.DOMAIN}${BugServiceService.BUGS_CONTEXT}`
      )
      .pipe(catchError(this.handleError<Bug[]>('getBugs', [])));
  }

  submitBug(bug: Bug): Observable<Bug> {
    return this.http
      .post<Bug>(
        `${BugServiceService.DOMAIN}${BugServiceService.BUGS_CONTEXT}`,
        bug
      )
      .pipe(
        tap((newBug: Bug) => console.log(`created ${JSON.stringify(newBug)}`))
      )
      .pipe(catchError(this.handleError<Bug>('submitBug', null)));
  }

  handleError<T>(op: string, result?: T | null) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${op} failed due to ${error.message}`);
      return of(result as T);
    };
  }
}
