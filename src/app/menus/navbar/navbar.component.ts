import { Component, EventEmitter, Output } from '@angular/core';
import { UserStoreService } from '../../services/user-store.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    constructor(public st: UserStoreService){

    }


    //@Output() private url: EventEmitter<string> = new EventEmitter();
    //public urlActive = 'inicio';
    
    // menuClick(ev, urlText){
    //     // console.log("Click en", ev);
    //     this.urlActive = urlText;
    //     // console.log("url a", urlText);
    //     this.url.emit(urlText);

    // }
}
