import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  ruc: string = '';
  valor: number = 0.0;
  gasto: string = 'Ninguno';
  facturaJSON: string = '';

  constructor() { }

  ngOnInit(): void {}

  onSubmit() {
    const factura = {
      ruc: this.ruc,
      valor: this.valor,
      gasto: this.gasto
    };

    this.facturaJSON = JSON.stringify(factura);
    console.log('Factura guardada en JSON:', this.facturaJSON);
  }
}
