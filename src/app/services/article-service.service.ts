import { Injectable } from '@angular/core';
import { Article } from '../modelos/article';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

    private articles: Article[];

    constructor() {        
        this.articles = [
            new Article(1, 'Bosque Matasnos','images/articles/1.png', 35.5, true, 3),
            new Article(2, 'Carmelo Rodero Crza','images/articles/2.jpg', 26.05, false, 2),
            new Article(3, 'Pago Capellanos Roble','images/articles/3.jpg', 15.90, true, 0)
        ];
    }

    getArticles(): Observable<Article[]>{
        return of(this.articles);
    }

    changeQuantity(articleID: number, chagenInQuantity: number): Observable <Article>{
        console.log("CHANGE serv", articleID);
        const article = this.articles.find(a => articleID === a.uid);
        article.quantityInCart += chagenInQuantity;

        return of(article);
    }


    create(article: Article): Observable<any> {
        let foundArticle = this.articles.find(each => each.uid === article.uid);
        if (foundArticle) {
            return throwError({msg: 'El Articulo con código ' + article.uid + ' ya existe en el sistema'});
        }        
        this.articles.push(article);
        return of({msg: 'El Articulo con código ' + article.uid + ' creado correctamente'});
    }    
}
