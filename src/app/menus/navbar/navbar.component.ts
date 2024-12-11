import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    @Output() private url: EventEmitter<string> = new EventEmitter();
    
    menuClick(ev, urlText){
        // console.log("Click en", ev);
        console.log("url a", urlText);
        this.url.emit(urlText);

    }
}
