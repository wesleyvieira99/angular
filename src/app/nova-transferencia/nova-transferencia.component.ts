import { Transferencia } from './../models/transferencias.models';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  title = 'bytebank';

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 12;
  destino: number = 222;

  constructor(private service: TransferenciaService, private router: Router) {}

  //Ação de realizar uma transferência
  transferir(){
    console.log('Solicitada nova transferência');
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigate(['extrato'])
    },
    (error) => console.log(error));
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
