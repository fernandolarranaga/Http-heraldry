import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HeraldryService {

  constructor(public http: HttpClient) { }

  getHeraldry(){
    return this.http.get("http://localhost:3001/heraldry")
  }

  deleteBlazon(id:any){
    return this.http.delete(`http://localhost:3001/heraldry/${id}`)
  }

  getBlazon(id:any){
    return this.http.get(`http://localhost:3001/heraldry/${id}`)
  }

  saveBlazon (formApp:any) {
    return this.http.post("http://localhost:3001/heraldry",formApp)
  }

}
