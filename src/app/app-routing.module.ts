import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleNewReactiveComponent } from './articles/article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { authGuard } from './guards/auth.guard';
import { articleNewDeactivateGuard } from './guards/article-new-deactivate.guard';
import { articleResolve } from './guards/article-resolve.resolver';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'article/list', component: ArticleListComponent },
    { path: 'article/create', component: ArticleNewReactiveComponent, canActivate: [authGuard], canDeactivate: [articleNewDeactivateGuard] },
    { path: 'article/:id', component: ArticleDetailComponent, canActivate: [authGuard], resolve: [articleResolve] },
    { path: '**', redirectTo: '/register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
