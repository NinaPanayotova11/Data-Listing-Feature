import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent {
  @Input() articles: {
    ns: number;
    pageid: number;
    size: number;
    snippet: string;
    timestamp: string;
    title: string;
    wordcount: number;
  }[] = [];
}
