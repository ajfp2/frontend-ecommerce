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
        // return of(this.articles);
        return this.http.get<Article[]>(`${ server }/api/articles`, { params: {q: query} });
    }

    changeQuantity(articleID: number, changeInQuantity: number): Observable <any>{
        console.log("CHANGE serv", articleID);
        return this.http.patch(`${ server }/api/articles/${ articleID }`, {changeInQuantity});
    }


    create(article: Article): Observable<any> {
        const {id, ...articleN} = article;
        return this.http.post(`${ server }/api/articles`, articleN);
    }    
}
