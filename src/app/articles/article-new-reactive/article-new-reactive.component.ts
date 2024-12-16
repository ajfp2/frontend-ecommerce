import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../../shared/custom-validator';

@Component({
  selector: 'app-article-new-reactive',
  standalone: false,
  
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})
export class ArticleNewReactiveComponent implements OnInit{

    public articleForm: FormGroup;

    constructor(private formBuilder: FormBuilder){
                
    }

    ngOnInit(): void {
        const patronURL = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        
        this.articleForm = this.formBuilder.group({
            uid: [null, [Validators.required, Validators.min(0)]],
            name: [null, [Validators.required, CustomValidator.nameValidator()]],
            price: [null, [Validators.required, Validators.min(0.1)]],
            imageUrl: [null, [Validators.required, Validators.pattern(patronURL)]]
        });
    }

    

    createArticle(){
        console.log("CREANDO ARTÍCULO REACTIVO:", this.articleForm.value);
    }

    resetForm(){
        this.articleForm.reset();
    }

}
