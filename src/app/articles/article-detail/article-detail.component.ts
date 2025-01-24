import { Component, OnInit } from '@angular/core';
import { Article } from '../../modelos/article';
import { ArticleServiceService } from '../../services/article-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  standalone: false,
  
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent implements OnInit{

    public article: Article;

    constructor(private as: ArticleServiceService, private route: ActivatedRoute){}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.as.getArticle(id).subscribe(resp => {
            this.article = resp;
        })
    }

    addToCart(){
        console.log('Unidad añadida al stock en article-item');
        this.article.quantityInCart += 1;
        this.as.changeQuantity(this.article.id, 1).subscribe((res) => {
            console.log(res.msg);
        }, 
        err => {
            alert(err.error.msg);
            console.error(err);                
        });
        //this.quantityChange.emit({ article: this.article, quantityChange: 1});
    }

    removeToCart(){
        console.log('Unidad borrada del stock en article-item');
        this.article.quantityInCart -= 1;
        this.as.changeQuantity(this.article.id, -1).subscribe((res) => {
            console.log(res.msg);
        }, 
        err => {
            alert(err.error.msg);
            console.error(err);                
        });
    }

}
