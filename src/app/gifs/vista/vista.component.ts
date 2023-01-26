import { Component} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
})
export class VistaComponent{

  get resultados(){
    return this.giftService.resultados;
  }

  constructor(private giftService : GifsService){}
}
