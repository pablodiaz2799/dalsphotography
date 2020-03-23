import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar-routes.config';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
  public menuItems: any [];

  ngOnInit(): void {
    this.menuItems = ROUTES;
  }

}
