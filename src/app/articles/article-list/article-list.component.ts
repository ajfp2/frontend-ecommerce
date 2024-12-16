import { Component, OnInit } from '@angular/core';
import { Article } from '../../modelos/article';
import { ArticleQuantityChange } from '../../modelos/article-quantity-change';

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
    // private counter = 1;

    constructor(){}

    ngOnInit(): void {
        this.articles = [
            new Article(1, 'Bosque Matasnos','images/articles/1.png', 35.5, true, 3),
            new Article(2, 'Carmelo Rodero Crza','images/articles/2.jpg', 26.05, false, 2),
            new Article(3, 'Pago Capellanos Roble','images/articles/3.jpg', 15.90, true, 0)
        ];        
    }

    onChangeQuantity(ev: ArticleQuantityChange){
        console.log("CHANGE", ev);
        const article = this.articles.find(a => ev.article.uid === a.uid);
        article.quantityInCart += ev.quantityChange;
    }

    // changeStockObject() {
    //     this.articles.push(new Article(4, 'Test Stock Company - ' + this.counter++,
    //         'images/articles/3.jpg', 85, false, 80));
    //   }
    
    //   changeStockPrice() {
    //     this.articles[0].price += 10;
    //   }
}
