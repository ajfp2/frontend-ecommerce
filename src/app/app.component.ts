import { Component } from '@angular/core';
import { ArticleServiceService } from './services/article-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Ecommerce UOC';

    // url = "inicio";
    // onChangeMenu(ev){
    //     this.url = ev;        
    // }
}
