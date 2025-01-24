// Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Main Component
import { AppComponent } from './app.component';

// Pipes
import { ImagePipe } from './pipes/image.pipe';

//Interceptor
import { ArticleAppInterceptor } from './interceptors/article-app.interceptor';

//Services
import { ArticleServiceService } from './services/article-service.service';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';

// Components Article
import { ArticleItemComponent } from './articles/article-item/article-item.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { NavbarComponent } from './menus/navbar/navbar.component';
// import { ArticleNewTemplateComponent } from './articles/article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './articles/article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
//user
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    ArticleListComponent,
    NavbarComponent,
    // ArticleNewTemplateComponent,
    ArticleNewReactiveComponent,
    ImagePipe,
    LoginComponent,
    RegisterComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
