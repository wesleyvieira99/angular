import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank2';

  constructor(private service: TransferenciaService){}
}
