import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-new-reactive',
  standalone: false,
  
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})
export class ArticleNewReactiveComponent {

    public articleForm: FormGroup;

    constructor(private formBuilder: FormBuilder){
        this.articleForm = this.formBuilder.group({
            uid: [null, [Validators.required, Validators.min(0)]],
            name: [null, Validators.required],
            price: [null, [Validators.required, Validators.min(0.1)]],
            imageUrl: [null, [Validators.required, Validators.pattern(/\/(\w+)\/(\w+)(\?{1}.*)?$/)]],
        });        
    }
    createArticle(){
        console.log("CREANDO ARTÍCULO REACTIVO:", this.articleForm);
    }

}
