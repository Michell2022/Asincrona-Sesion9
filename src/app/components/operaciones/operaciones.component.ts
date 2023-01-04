import { Component } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent {

  valor1!: number;
  valor2!: number;
  operacion: string = "ninguna";
  resultado!: number;  
}
