import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorInterceptorService } from './error-interceptor.service';
import { ToastComponent } from './toast/toast.component';

const appRoutes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: ':searchTerm', component: SearchPageComponent },
  {
    path: 'details/:pageid/:title/:wordcount/:searchTerm/:snippet',
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
    ToastComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
