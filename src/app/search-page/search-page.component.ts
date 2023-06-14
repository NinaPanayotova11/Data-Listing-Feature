import { Component } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';
import { ActivatedRoute } from '@angular/router';
import { article } from '../interfaces/article.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  articles: article[] = [];

  searchTerm: string = '';

  constructor(
    private wikipediaService: WikipediaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot?.params['searchTerm'];
    //if a searchTerm is received as a parameter
    // when navigating back from the Details page
    // the getCached method of the WikipediaService gets called
    if (this.searchTerm) {
      this.wikipediaService
        .getCached('https://en.wikipedia.org/w/api.php', this.searchTerm)
        .subscribe((articles: any) => {
          this.articles = articles?.query?.search;
        });
    }
  }
  // on search it calls the getCached method of the WikipediaService
  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.wikipediaService
      .getCached('https://en.wikipedia.org/w/api.php', searchTerm)
      .subscribe((articles: any) => {
        this.articles = articles?.query?.search;
      });

    // uncomment the call to the testError method here
    // and the method in the WikipediaService to test error handling
    // this.wikipediaService.testError().subscribe();
  }
}
