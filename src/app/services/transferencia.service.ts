import { Transferencia } from './../models/transferencias.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
private listaTransferencia: any[];
private url = 'http://localhost:3000/transferencias';

constructor(private HttpClient: HttpClient) {
  this.listaTransferencia = [];
}

get transferencias() {
  return this.listaTransferencia;
}

todas(): Observable<Transferencia[]> {
  return this.HttpClient.get<Transferencia[]>(this.url);
}

//Usando observable para que a função seja subscrita depois quando for usada
adicionar(transferencia: Transferencia): Observable<Transferencia> {
  this.hidratar(transferencia)
  return this.HttpClient.post<Transferencia>(this.url, transferencia)
}

hidratar(transferencia: any) {
  transferencia.data = new Date();
}

}
