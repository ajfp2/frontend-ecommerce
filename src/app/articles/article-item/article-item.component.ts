import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { Article, ArticleI } from '../../modelos/article';
import { ArticleQuantityChange } from '../../modelos/article-quantity-change';

@Component({
  selector: 'app-article-item',
  standalone: false,
  
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent implements OnInit{
    
    @Input() public article: Article;
    @Output() private quantityChange: EventEmitter<ArticleQuantityChange> = new EventEmitter();
    // public articleI: ArticleI;
    public stockClasses;

    constructor(){}

    ngOnInit(): void {

      // Si usarmos interfaz inicializariamos el article de la siguiente manera:
      /*
        this.articleI = {
          uid: 1,
          name: 'Bosque Matasnos',
          imageUrl: 'images/articles/bosque-matasnos.png',
          price: 35.5, 
          isOnSale: true, 
          quantityInCart: 3
        };
        */
        this.stockClasses = {
            "price": this.article.isOnSale,
            "price_disabled": !this.article.isOnSale,
          };

    }

    addToCart(){
        console.log('Unidad añadida al stock en article-item');
        this.quantityChange.emit({ article: this.article, quantityChange: 1});
    }

    removeToCart(){
        console.log('Unidad borrada del stock en article-item');
        this.quantityChange.emit({ article: this.article, quantityChange: -1});
    }

    changeArticlePrice() {
        this.article.price += 5;
    }

    /*
    @Input() public stock: Stock;
  @Output() private toggleFavorite:EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
   }

  onToggleFavorite(event) {
    this.toggleFavorite.emit(this.stock);
  }
    */
}
