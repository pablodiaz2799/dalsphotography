import { Component, OnInit } from '@angular/core';
import {homeRoutes} from '../shared/routes/img.routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public images;
  constructor() { }

  ngOnInit(): void {
    this.images = homeRoutes;
  }

}
