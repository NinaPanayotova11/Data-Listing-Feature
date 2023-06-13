import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
  article: {
    id: number;
    title: string;
    wordcount: number;
    searchTerm: string;
  } = {
    id: 0,
    title: '',
    wordcount: 0,
    searchTerm: '',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.article = {
      id: this.route.snapshot.params['pageid'],
      title: this.route.snapshot.params['title'],
      wordcount: this.route.snapshot.params['wordcount'],
      searchTerm: this.route.snapshot.params['searchTerm'],
    };
  }
}
