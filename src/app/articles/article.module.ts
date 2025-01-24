import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagePipe } from '../pipes/image.pipe';


@NgModule({
    declarations: [
        ArticleListComponent,
        ArticleNewReactiveComponent,
        ArticleItemComponent,
        ArticleDetailComponent,
        ImagePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ArticleRoutingModule
    ]
})
export class ArticleModule { }
