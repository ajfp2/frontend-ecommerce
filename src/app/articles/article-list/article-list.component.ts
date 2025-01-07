import { Component, OnInit } from '@angular/core';
import { Article } from '../../modelos/article';
import { ArticleQuantityChange } from '../../modelos/article-quantity-change';
import { ArticleServiceService } from '../../services/article-service.service';

@Component({
  selector: 'app-article-list',
  standalone: false,
  
  template: `
  <h1 class="mx-auto text-center pb-2">Ecommerce PEC-5</h1>
  <div class="row">
    <app-article-item class="col-auto" *ngFor="let item of articles" [article]="item" (quantityChange)="onChangeQuantity($event);"></app-article-item>
    </div>
  `,
  styles: []
})
export class ArticleListComponent implements OnInit{

    public articles: Array<Article>;

    constructor(private as: ArticleServiceService){}

    ngOnInit(): void {
        this.as.getArticles().subscribe(arts => {         
          this.articles = arts;
        });
    }

    onChangeQuantity(ev: ArticleQuantityChange){
        this.as.changeQuantity(ev.article.uid, ev.quantityChange);
    }
}
