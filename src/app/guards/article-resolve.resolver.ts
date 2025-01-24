import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Article } from '../modelos/article';
import { ArticleServiceService } from '../services/article-service.service';

export const articleResolve: ResolveFn<Article> = (route, state) => {
    const id = route.paramMap.get('id');
    console.log("RESOLVE ARTICLE");
    return inject(ArticleServiceService).getArticle(id);
};
