import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { authGuard } from '../guards/auth.guard';
import { articleNewDeactivateGuard } from '../guards/article-new-deactivate.guard';
import { articleResolve } from '../guards/article-resolve.resolver';

const routes: Routes = [
    { path: 'list', component: ArticleListComponent },
    { path: 'create', component: ArticleNewReactiveComponent, canActivate: [authGuard], canDeactivate: [articleNewDeactivateGuard] },
    { path: ':id', component: ArticleDetailComponent, canActivate: [authGuard], resolve: [articleResolve] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
