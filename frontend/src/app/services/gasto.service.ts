import { Injectable } from '@angular/core';
import { Gasto } from '../models/gasto';
import { HttpClient } from '@angular/common/http';

const configUrl='assets/datos.json';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http esta funcionando…');
    }
    obtenerDatos(){
      return this.httpclient.get<Gasto[]>(configUrl);
      }

}