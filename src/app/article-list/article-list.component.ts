import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { article } from '../interfaces/article.interface';

@Component({
  selector: 'app-article-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
