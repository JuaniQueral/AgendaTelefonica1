import { Component, Input, NgModule, OnInit } from '@angular/core';
import { iAuthRequest } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent {

  @Input() dataEntrante: any;

  
  
  constructor(private auth:AuthService, private router:Router) { }
  


    authData:iAuthRequest = {
      userName : "",
      password : ""
    };
  
  
    async login(form:NgForm){
      //Valor del formulario para no usar NgModel
      console.log(form.value);
      const token = await this.auth.login(form.value);
      if(token) this.router.navigate(['']);
  }
 
}



