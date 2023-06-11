import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: SearchPageComponent },
  {
    path: 'details/:pageid/:title/:wordcount',
    component: ArticleDetailsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ArticleListComponent,
    SearchPageComponent,
    ArticleDetailsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
