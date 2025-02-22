import { Component, OnInit } from '@angular/core';
import { Article } from '../../modelos/article';
import { ArticleQuantityChange } from '../../modelos/article-quantity-change';
import { ArticleServiceService } from '../../services/article-service.service';
import {  Observable, Subject } from 'rxjs';
import { startWith, debounceTime, distinctUntilChanged, merge, switchMap, share, mergeWith } from 'rxjs/operators';


@Component({
  selector: 'app-article-list',
  standalone: false,
  
  template: `
    
    <h2 class="text-center mt-3 "><u>Listado de Artículos </u>({{(articles$ | async)?.length}})</h2>
    
    <div class="row justify-content-center mb-2">
        <div class="col-4">
            <div class="input-group my-3">
                <span class="input-group-text" id="basic-addon1">Buscar articulos: </span>
                <input type="text" class="form-control form-control-sm" placeholder="Buscar ..." (keyup)="buscar()" [(ngModel)]="search">
            </div> 
        </div>
    </div>

    
    <div class="row mx-auto justify-content-center mt-3">
        <app-article-item class="col-auto" *ngFor="let item of articles$ | async" [article]="item" (quantityChange)="onChangeQuantity($event);"></app-article-item>
    </div>
  `,
  styles: [],
  // providers: [ArticleServiceService] // Si se inyectara aquí al grabar nuevo articulo por ej, no saldría luego en la pantalla principal
})
export class ArticleListComponent implements OnInit{

    public articles$: Observable<Article[]>;
    public search: string = '';
    private searchTerms: Subject<string> = new Subject();
    // private reloadArticlesList: Subject<void> = new Subject();
    private reloadArticlesList: Subject<void> = new Subject();
    constructor(private as: ArticleServiceService){}

    ngOnInit(): void {        
        this.articles$ = this.searchTerms.pipe(
            startWith(this.search),
            debounceTime(500),
            distinctUntilChanged(),            
            mergeWith(this.reloadArticlesList),
            switchMap((q) => this.as.getArticles(this.search)),
            share()
        );
    }

    onChangeQuantity(ev: ArticleQuantityChange){
        this.as.changeQuantity(ev.article.id, ev.quantityChange).subscribe((res) => {
                console.log(res.msg);
                this.reloadArticlesList.next();
            }, 
            err => {
                alert(err.error.msg);
                console.error(err);                
            }
        );
    }

    buscar(): any{
        this.searchTerms.next(this.search);
        console.log("Buscar", this.search);        
    }

    onCreate() {
        this.reloadArticlesList.next();
    }
}
