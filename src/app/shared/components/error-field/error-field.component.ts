import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-field',
  templateUrl: './error-field.component.html',
  styleUrls: ['./error-field.component.scss']
})
export class ErrorFieldComponent implements OnInit {

  @Input() controlName: string;

  mostrarMensaje: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.controlName !== '') {
      this.mostrarMensaje = true;
    }else{
      this.mostrarMensaje = false;
    }
  }

}
