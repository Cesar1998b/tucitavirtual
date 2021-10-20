import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  anio: number;

  constructor() { }

  ngOnInit(): void {
    this.anio = new Date().getFullYear();
  }

  fixPosicion(): boolean {
    const container = document.getElementById('container');
    const height = container.offsetHeight;
    if (height < (screen.height * 0.8)) {
      return true;
    }
    return false;
  }

}
