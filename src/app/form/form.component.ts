import { Component, OnInit } from '@angular/core';
import { HeraldryService } from '../services/heraldry.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Blazon} from '../blazon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  heraldrys: any;

formApps= {
  content: '',
  date: '', 
  img: ''
};


  constructor(public heraldry: HeraldryService, private route: Router ) { }

  ngOnInit(): void {}

  crearEscudo(){
    this.heraldry.saveBlazon(this.formApps)
    .subscribe(data => {
      this.heraldrys =data;
      this.route.navigate([''])
      
    })
  }
}
