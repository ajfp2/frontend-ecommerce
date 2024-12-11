import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'ecommerce';

    url = "inicio";
    onChangeMenu(ev){
        console.log("Menú:", ev);
        this.url = ev;        
    }
}
