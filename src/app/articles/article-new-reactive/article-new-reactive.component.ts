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
    public grabando = false;
    constructor(private formBuilder: FormBuilder){
                
    }

    ngOnInit(): void {
        const patronURL = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        
        this.articleForm = this.formBuilder.group({
            uid: [null, [Validators.required, Validators.min(0)]],
            name: ['', [Validators.required, CustomValidator.nameValidator()]],
            price: [null, [Validators.required, Validators.min(0.1)]],
            imageUrl: ['', [Validators.required, Validators.pattern(patronURL)]],
            isOnSale: false
        });
    }    

    createArticle(){
        this.grabando = true;
        console.log("CREANDO ARTÍCULO REACTIVO:", this.articleForm.value);
    }

    resetForm(){
        this.grabando = false;
        this.articleForm.reset();
    }

}
