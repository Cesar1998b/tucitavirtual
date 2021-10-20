import { Component, OnInit, Input } from "@angular/core";
import { MenuItem } from "@core/modelo/menu-item";

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
  styles: [
    `
      span a {
        font-size: 20px;
      }

      span a mat-icon{
        font-size: 18px;
        padding-left: 2px;
      }

      .nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        box-sizing: border-box;
        margin-left: 15px;
      }

      a {
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        line-height: 48px;
        margin-right: 20px;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
      }

      a.router-link-active {
        color: #106cc8;
      }

      .menu-spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  @Input()
  items: MenuItem[];

  constructor() {}

  ngOnInit() {}
}
