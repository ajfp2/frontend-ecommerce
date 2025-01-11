import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../../shared/custom-validator';
import { ArticleServiceService } from '../../services/article-service.service';

@Component({
  selector: 'app-article-new-reactive',
  standalone: false,
  
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})
export class ArticleNewReactiveComponent implements OnInit{

    public articleForm: FormGroup;
    public grabando = false;
    public ultimoID = 0;
    constructor(private formBuilder: FormBuilder, private as: ArticleServiceService){
                
    }

    ngOnInit(): void {
        const patronURL = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        this.as.getArticles('').subscribe(r => this.ultimoID = r.length);
        this.articleForm = this.formBuilder.group({
            id: [null, [Validators.min(0)]],
            name: ['', [Validators.required, CustomValidator.nameValidator()]],
            price: [null, [Validators.required, Validators.min(0.1)]],
            imageUrl: ['', [Validators.required, Validators.pattern(patronURL)]],
            isOnSale: false
        });
    }    

    createArticle(){
        this.grabando = true;
        this.as.create(this.articleForm.value).subscribe( (res: any) => {
            console.log("res", res);            
            alert(`El Articulo con código ${ res.id } creado correctamente`);
        }, err => {
            console.log("err", err);
            alert(err.error.msg);
        });
        console.log("CREANDO ARTÍCULO REACTIVO:", this.articleForm.value);
    }

    resetForm(){
        this.grabando = false;
        this.articleForm.reset();
    }

}
