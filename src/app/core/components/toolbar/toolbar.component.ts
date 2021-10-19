import { Component, OnInit, Input } from "@angular/core";
import { MenuItem } from "@core/modelo/menu-item";

@Component({
  selector: "app-toolbar",
  templateUrl: "toolbar.component.html",
  styles: [
    `
      .container {
        display: flex;
        justify-content: space-between;
        padding: 0 1rem 0 2rem;
      }
      a {
        color: #fff;
        font-size: 20px;
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
    `,
  ],
})
export class ToolbarComponent implements OnInit {
  @Input()
  items: MenuItem[];

  constructor() {}

  ngOnInit() {}
}
