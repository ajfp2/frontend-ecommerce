// Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Main Component
import { AppComponent } from './app.component';

//Interceptor
import { ArticleAppInterceptor } from './interceptors/article-app.interceptor';

//Services
import { ArticleServiceService } from './services/article-service.service';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';

// Components Article
import { NavbarComponent } from './menus/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ArticleServiceService,
    UserService,
    UserStoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ArticleAppInterceptor,
      multi: true,
    }
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
