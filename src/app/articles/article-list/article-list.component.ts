import { Component, OnInit } from '@angular/core';
import { Article } from '../../modelos/article';
import { ArticleQuantityChange } from '../../modelos/article-quantity-change';
import { ArticleServiceService } from '../../services/article-service.service';
import { debounceTime, distinctUntilChanged, Observable, share, startWith, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-article-list',
  standalone: false,
  
  template: `
    <h2 class="mx-auto mt-3 text-center pb-2">Listado de Artículos ({{(articles$ | async)?.length}})</h2>

    <div class="row mx-auto">
        <div class="col-12">
            <div class="input-group my-3">
                <span class="input-group-text" id="basic-addon1">Buscar articulos: </span>
                <input type="text" class="form-control form-control-sm" placeholder="Buscar ..." (keyup)="buscar()" [(ngModel)]="search">
            </div>      
        </div>
    </div>
    <div class="row mx-auto">
        <app-article-item class="col-auto" *ngFor="let item of articles$ | async" [article]="item" (quantityChange)="onChangeQuantity($event);"></app-article-item>
    </div>
  `,
  styles: [],
  // providers: [ArticleServiceService] // Si se inyectara aquí al grabar nuevo articulo por ej, no saldría luego en la pantalla principal
})
export class ArticleListComponent implements OnInit{

    //public articles: Array<Article>;
    public articles$: Observable<Article[]>;
    public search: string = '';
    private searchTerms: Subject<string> = new Subject();

    constructor(private as: ArticleServiceService){

    }

    ngOnInit(): void {
        // this.articles$ = this.as.getArticles(this.search).pipe(share());
        this.articles$ = this.searchTerms.pipe(
            startWith(this.search),
            debounceTime(500),
            distinctUntilChanged(),
            switchMap((q) => this.as.getArticles(q)),
            share()
        );
    }

    onChangeQuantity(ev: ArticleQuantityChange){
        this.as.changeQuantity(ev.article.id, ev.quantityChange);
    }

    buscar(): any{
        this.searchTerms.next(this.search);
        console.log("Buscar", this.search);        
    }
}
