import { Component, OnInit } from '@angular/core';
import { Article } from '../../modelos/article';
import { ArticleQuantityChange } from '../../modelos/article-quantity-change';
import { ArticleServiceService } from '../../services/article-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  standalone: false,
  
  template: `
    <h1 class="mx-auto text-center pb-2">Ecommerce PEC-6</h1>
    <div class="row mx-auto">
        <div class="col-12">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Buscar articulos: </span>
                <input type="text" class="form-control form-control-sm" placeholder="Buscar ..." (keyup)="buscar(txtBuscar.value)" #txtBuscar>
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
    public search = '';

    constructor(private as: ArticleServiceService){

    }

    ngOnInit(): void {
      this.articles$ = this.as.getArticles(this.search);
        // this.as.getArticles().subscribe(arts => {         
        //   this.articles$ = arts;
        // });
    }

    onChangeQuantity(ev: ArticleQuantityChange){
        this.as.changeQuantity(ev.article.id, ev.quantityChange);
    }

    buscar( termino: string ): any{
        if ( termino.length === 0) {
            //return this.productos = this.productosTemp;
            this.search = termino;
        } else this.articles$ = this.as.getArticles(this.search);

        this.search = termino;
        console.log("Buscar", this.search);
        
    }
}
