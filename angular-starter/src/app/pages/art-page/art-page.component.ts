import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'art-page',
  templateUrl: './art-page.component.html',
  styleUrls: ['./art-page.component.css']
})
export class ArtPageComponent implements OnInit{
  constructor(private route: Router){

  }

  ngOnInit(): void {
    // setTimeout(() => {this.route.navigateByUrl('full-layout');},2000);
  }
  
}
