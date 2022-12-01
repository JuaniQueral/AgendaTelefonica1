import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Contacto } from 'src/app/interfaces/contacto';
import { Subscription } from 'rxjs';
import { defaultContact } from 'src/app/interfaces/contacto';

@Component({
  selector: 'app-ver-contacto',
  templateUrl: './ver-contacto.component.html',
  styleUrls: ['./ver-contacto.component.scss']
})
export class VerContactoComponent implements OnInit, OnDestroy{
  id!: number;
  contacto!: Contacto;
  loading: boolean = false;
  

  routeSub!: Subscription;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    
  }
 



}


