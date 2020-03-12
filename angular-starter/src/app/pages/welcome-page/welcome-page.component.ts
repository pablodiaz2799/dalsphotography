import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit{
  constructor(private route: Router){

  }

  ngOnInit(): void {
    // setTimeout(() => {this.route.navigateByUrl('full-layout');},2000);
  }
  
}
