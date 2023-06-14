import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
  articleDetails: {
    pageid: number;
    title: string;
    wordcount: number;
    searchTerm: string;
    snippet: string;
  } = {
    pageid: 0,
    title: '',
    wordcount: 0,
    searchTerm: '',
    snippet: '',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.articleDetails = {
      pageid: this.route.snapshot.params['pageid'],
      title: this.route.snapshot.params['title'],
      wordcount: this.route.snapshot.params['wordcount'],
      searchTerm: this.route.snapshot.params['searchTerm'],
      snippet: this.route.snapshot.params['snippet'],
    };
  }
}
