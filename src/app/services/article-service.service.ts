import { Injectable } from '@angular/core';
import { Article } from '../modelos/article';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const server = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})

export class ArticleServiceService {

    private articles: Article[];

    constructor(private http: HttpClient) {
        console.log("Service Constructor");
    }

    getArticles(query: string): Observable<Article[]>{
        return this.http.get<Article[]>(`${ server }/api/articles`, { params: {q: query} });
    }

    getArticle(id: string): Observable<Article>{
        return this.http.get<Article>(`${ server }/api/articles/${ id }`);
    }

    changeQuantity(articleID: number, changeInQuantity: number): Observable <any>{
        return this.http.patch(`${ server }/api/articles/${ articleID }`, {changeInQuantity});
    }


    create(article: Article): Observable<any> {
        const {id, ...articleN} = article;
        return this.http.post(`${ server }/api/articles`, articleN);
    }    
}
