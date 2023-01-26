import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gifs, GifsInterface } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private servicioUrl :string = 'https://api.giphy.com/v1/gifs';
  private apikey: string = 'pkF6gh99zEHUzO8P238sSkmg2rfKpMo1'
  // crear arreglo
  private _historial: string[] = [];
  public resultados : gifs [] = [];
  
  get historial(){
    return [...this._historial]
  }

  constructor (private http : HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [] ;

    this.resultados = JSON.parse(localStorage.getItem('resultado')!) || [];
  }

  
  buscarGifs(query : string){
    query = query.trim().toLocaleUpperCase();
    
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,8)
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<GifsInterface>(`${this.servicioUrl}/search`,{params})
    .subscribe((res)=>{
      this.resultados = res.data
      localStorage.setItem('resultado', JSON.stringify(this.resultados));
      console.log(res.data);
    })
  }

}
