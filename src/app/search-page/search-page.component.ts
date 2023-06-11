import { Component } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  articles: {
    ns: number;
    size: number;
    timestamp: string;
    title: string;
    snippet: string;
    pageid: number;
    wordcount: number;
  }[] = [];

  constructor(private wikipedia: WikipediaService) {}

  onSearch(searchTerm: string) {
    this.wikipedia.searchForArticles(searchTerm).subscribe((articles) => {
      this.articles = articles;
    });
  }
}
