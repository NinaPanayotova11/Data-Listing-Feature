import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  // a Map collection that will be used to store the requests and responses
  cachedItems = new Map();

  constructor(private http: HttpClient) {}

  // uncomment this method and the place where it is called in the SearchPageComponent to test error handling
  // public testError() {
  //   return this.http.get<any>('https://httpstat.us/random/500-504');
  // }

  // checks if the request we want to make to the API has already been made
  getCached<WikipediaResponse>(
    url: string,
    searchTerm: string
  ): Observable<WikipediaResponse> {
    // if the request has already been made
    // it returns the matching response it has saved in the cachedItems Map
    if (this.cachedItems.get(searchTerm)) {
      return of(this.cachedItems.get(searchTerm) as WikipediaResponse);
    }
    // if the request is being made for the first time
    // it sends it to the API and saves the searchTerm
    // needed for the request and the response
    // in the cachedItems Map as a unique pair
    return this.http
      .get<WikipediaResponse>(url, {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: searchTerm,
          origin: '*',
        },
      })
      .pipe(
        map((item: WikipediaResponse) => {
          this.cachedItems.set(searchTerm, item);
          return item;
        })
      );
  }
}
