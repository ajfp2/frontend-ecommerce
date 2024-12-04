import { Component, OnInit } from '@angular/core';
import { Article } from '../../modelos/article';

@Component({
  selector: 'app-article-item',
  standalone: false,
  
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent implements OnInit{
    
    public article: Article;
    public stockClasses;
    constructor(){}

    ngOnInit(): void {
        this.article = new Article('Bosque Matasnos','images/articles/bosque-matasnos.png', 35.5, 3);
        this.stockClasses = {
            "price": this.article.isOnSaleChange(),
            "price_disabled": !this.article.isOnSaleChange(),
          };

    }

    addToCart(ev){
        console.log('Unidad añadida al stock', ev);
        this.article.quantityInCart++;
    }

    removeToCart(ev){
        console.log('Unidad Borrada del carrito', ev);
        this.article.quantityInCart--;
    }

    
}
