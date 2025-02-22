import { Component } from '@angular/core';
import { Article } from '../../modelos/article';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  standalone: false,
  
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css'
})

export class ArticleNewTemplateComponent {
    public article: Article;
    public grabando = false;

    constructor(){
        this.article = {
          id:4,
          name: 'Superius',
          imageUrl: 'images/articles/4.png',
          price: 47.70,
          isOnSale: true,
          quantityInCart: 4
        };        
    }
    
    createArticle(articleForm){
      console.log('Artículo form', articleForm.value);
      if (articleForm.valid) {
        this.article = articleForm.value;
        this.grabando = true;
        console.log('Guardando artículo ', this.article);
      } else {
        console.error('Formulario artículo incorrecto');
      }      
    }
}
