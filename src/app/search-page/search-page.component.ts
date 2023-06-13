import { Component } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';
import { ActivatedRoute } from '@angular/router';

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

  searchTerm: string = '';

  constructor(
    private wikipediaService: WikipediaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot?.params['searchTerm'];
    if (this.searchTerm) {
      this.wikipediaService
        .getCached('https://en.wikipedia.org/w/api.php', this.searchTerm)
        .subscribe((articles: any) => {
          this.articles = articles?.query?.search;
        });
    }
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.wikipediaService
      .getCached('https://en.wikipedia.org/w/api.php', searchTerm)
      .subscribe((articles: any) => {
        this.articles = articles?.query?.search;
      });

    // this.wikipediaService.testError().subscribe();
  }
}
