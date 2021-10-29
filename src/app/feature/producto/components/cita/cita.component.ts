import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss']
})
export class CitaComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  redirectToCitas(): void{
    this.route.navigate(['/crear']);
  }

}
