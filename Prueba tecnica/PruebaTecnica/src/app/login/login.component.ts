import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
   });
   
  ngOnInit(): void {
  }

}
