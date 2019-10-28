import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor( private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group(
      {
      email : ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
      }
    )
  }

  ngOnInit() {
  }

  login( values ) {
    console.log(values);
  }
}
