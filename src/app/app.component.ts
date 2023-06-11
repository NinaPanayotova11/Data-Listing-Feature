import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  articles = [];

  constructor(private wikipedia: WikipediaService) {}

  onSearch(searchTerm: string) {
    this.wikipedia.searchForArticles(searchTerm).subscribe((response: any) => {
      this.articles = response.query.search;
    });
  }
}
