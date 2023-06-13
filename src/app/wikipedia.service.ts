import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface WikipediaResponse {
  query: {
    search: {
      ns: number;
      size: number;
      timestamp: string;
      title: string;
      snippet: string;
      pageid: number;
      wordcount: number;
    }[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  cachedItems = new Map();

  constructor(private http: HttpClient) {}

  // public testError() {
  //   return this.http.get<any>('https://httpstat.us/404');
  // }

  getCached<WikipediaResponse>(
    url: string,
    searchTerm: string
  ): Observable<WikipediaResponse> {
    if (this.cachedItems.get(searchTerm)) {
      console.log('next');
      return of(this.cachedItems.get(searchTerm) as WikipediaResponse);
    }
    console.log('first');
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

  public searchForArticles(searchTerm: string) {
    return this.http
      .get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: searchTerm,
          origin: '*',
        },
      })
      .pipe(map((x) => x?.query?.search));
  }
}
