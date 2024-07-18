// informacion.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  gastos = [
    {
      "id": 1,
      "tipo": "Vivienda",
      "descripcion": "Gasto relacionado con vivienda",
      "informacion_adicional": "Pagos por concepto de servicios básicos que incluyen agua, gas, electricidad, teléfono convencional y alícuota de condominio de un único inmueble usado para vivienda",
      "path":  "assets/vivienda.png"
    },
    {
      "id": 2,
      "tipo": "Salud",
      "descripcion": "Gasto relacionado con salud",
      "informacion_adicional": "Medicina prepagada y prima de seguro médico en contratos individuales y corporativos. En los casos que estos valores correspondan a una póliza corporativa y los mismos sean descontados del rol de pagos del contribuyente, este documento será válido para sustentar el gasto correspondiente",
      "path": "assets/salud.png"
    },
    {
      "id": 3,
      "tipo": "Educacion",
      "descripcion": "Gasto relacionado con educación",
      "informacion_adicional": "Matrícula y pensión en todos los niveles del sistema educativo, inicial, educación general básica, bachillerato y superior, así como la colegiatura, los cursos de actualización, seminarios de formación profesional debidamente aprobados por el Ministerio de Educación o del Trabajo cuando corresponda o por el Consejo Nacional de Educación Superior según el caso. ",
      "path": "assets/educacion.png"
    },
    {
      "id": 4,
      "tipo": "Vestimenta",
      "descripcion": "Gasto relacionado con vestimenta",
      "informacion_adicional": "Se considerarán gastos de vestimenta los realizados por cualquier tipo de prenda de vestir. Pensiones alimenticias, debidamente sustentadas en acta de mediación o resolución judicial",
      "path": "assets/vestimenta.png"
    },
    {
      "id": 5,
      "tipo": "Alimentacion",
      "descripcion": "Gasto relacionado con alimentacion",
      "informacion_adicional": "Compras de alimentos para consumo humano y otros productos naturales o artificiales que el ser humano ingiere para subsistir o para su nutrición. Pensiones alimenticias, debidamente sustentadas en acta de mediación o resolución judicial",
      "path": "assets/alimentacion.png"
    }         
  ];

  deducibles = ['Vivienda', 'Salud', 'Educacion', 'Vestimenta', 'Alimentacion'];

  constructor() {}

  ngOnInit(): void {}

  informacion(deducible: string) {
    const gasto = this.gastos.find(g => g.tipo === deducible);
    if (gasto) {
      alert('Esta es información adicional sobre ' + deducible + ': ' + gasto.informacion_adicional);
    }
  }

  borrar(deducible: string) {
    const index = this.deducibles.indexOf(deducible);
    if (index !== -1) {
      this.deducibles.splice(index, 1);
    }
  }
  descripcion(deducible: string): string {
    const gasto = this.gastos.find(g => g.tipo === deducible);
    return gasto ? gasto.descripcion : '';
  }
  
  infoAdicional(deducible: string): string {
    const gasto = this.gastos.find(g => g.tipo === deducible);
    return gasto ? gasto.informacion_adicional : '';
  }
  
  getPath(deducible: string): string {
    const gasto = this.gastos.find(g => g.tipo === deducible);
    return gasto ? gasto.path : 'hola';
  }
}
