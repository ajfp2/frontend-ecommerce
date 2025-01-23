import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

    public grabando = false;
    public loginForm: FormGroup;
    constructor(private us: UserService, private fb: FormBuilder, private router: Router){}

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    login() {
        this.grabando = true;
        if (this.loginForm.invalid) {
            alert('ERROR LOGIN- Formulario incorrecto');
            return;
        }
        this.us.login( this.loginForm.value ).subscribe(resp => {
            alert(resp.msg);
            localStorage.setItem('user_uoc', this.loginForm.get('username').value);
            // IR al listado de artículos
            this.router.navigate(['article', 'list']);
        }, (err) => {
            console.error(err);
            alert(err.error.msg);
        });
    }

}
