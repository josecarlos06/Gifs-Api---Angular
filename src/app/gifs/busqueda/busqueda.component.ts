import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent{
  @ViewChild('txtBuscar') txtbuscar!:ElementRef<HTMLInputElement>;
  constructor( private gifsService : GifsService ){}

  buscar(){ 
    const valor = this.txtbuscar.nativeElement.value;
    if(valor.trim() === ''){
      return
    }
    this.gifsService.buscarGifs(valor);
    this.txtbuscar.nativeElement.value='';
  }
}
