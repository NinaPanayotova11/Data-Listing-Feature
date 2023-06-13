import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

interface article {
  ns: number;
  pageid: number;
  size: number;
  snippet: string;
  timestamp: string;
  title: string;
  wordcount: number;
}

@Component({
  selector: 'app-article-list',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent {
  @Input() articles?: article[];
  @Input() searchTerm?: string;

  trackByFn(index: number, article: article): number {
    return article.pageid;
  }
}
