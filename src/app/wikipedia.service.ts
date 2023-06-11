import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(private http: HttpClient) {}

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
