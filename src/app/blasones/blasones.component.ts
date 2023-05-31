import { Component, OnInit } from '@angular/core';
import { HeraldryService } from '../services/heraldry.service';
import { HttpClient } from '@angular/common/http';
import { Blazon } from '../model/blazon';

@Component({
  selector: 'app-blasones',
  templateUrl: './blasones.component.html',
  styleUrls: ['./blasones.component.css']
})
export class BlasonesComponent implements OnInit {

  heraldry: any = [];
  heraldryCopy: any = [];


  constructor(
    public heraldry_service: HeraldryService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.getBlazones();

  }

  getBlazones() {
    this.heraldry_service.getHeraldry()
      .subscribe(data => {
        console.log(data);
        this.heraldry = data;
        this.heraldryCopy = this.heraldry;
        console.log(this.heraldryCopy);
      })
  }
/**
 * @param event recibe el dato para filtrar listas
 */
  search(event: any) {
    let searchValue = event.target.value;
    this.heraldry = this.heraldryCopy?.filter(({ content }: Blazon) => {
      return content.toLowerCase().includes(searchValue.toLowerCase());
    })
  };


  /*
  post(){
    this.http.post("http://localhost:3001/heraldry",
    {
    content: "Fer",
    date: "Parcialmente soleado",
    img:"https://www.protocolo.org/extfiles/i-7866-cG.28481.1.jpg"
    })
    .subscribe( data => { this.heraldry = data; } );
    }
    */
}
