import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

    public grabando = false;
    public registerForm: FormGroup;
    constructor(private us: UserService, private fb: FormBuilder, private router: Router){}

    ngOnInit(): void {
        this.registerForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    createUser(){
        this.grabando = true;
        this.us.create(this.registerForm.value).subscribe( (res: any) => {  
            console.log("create",res);                     
            alert(res.msg);
            this.router.navigate(['user', 'login']);
        }, err => {
            alert(err.error.msg);
        });
        console.log("CREANDO USUARIO REACTIVO:", this.registerForm.value);
    }

    resetForm(){
        this.grabando = false;
        this.registerForm.reset();
    }

}
