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
    public confirmed = false;

    constructor(){
        this.article = new Article(4, 'Superius', 'images/articles/4.png', 47.70, true, 4);
        
    }

    createArticle(articleForm){
      console.log('Artículo form', articleForm.value);
      if (articleForm.valid) {
        this.article = articleForm.value.article;
        console.log('Creando  artículo ', this.article);
      } else {
        console.error('Formulario artículo estado malo');
      }      
    }
}
