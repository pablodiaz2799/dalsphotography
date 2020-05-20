import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { ROUTES } from './navbar-routes.config';
import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
  url = '';
  constructor(router:Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.hideMenu();
          this.url = event.url;
        },700);
      }

    });
  }


  public menuItems: any [];
  @ViewChild('sidebarMenu') menu: ElementRef;
  @ViewChild('menuIcon') icon: ElementRef;
  @Output() someEvent = new EventEmitter();

  ngOnInit(): void {
    this.menuItems = ROUTES;
  }

  showMenu(){
    if(this.url == '/about'){
      this.menu.nativeElement.style.width = '100%';
      this.menu.nativeElement.style.right = '0%';
    }
    else{
      this.menu.nativeElement.style.right = '0px';
    }
    this.menu.nativeElement.style.height = '100vh';
    document.body.style.position = 'fixed';
  }

  hideMenu(){
    this.menu.nativeElement.style.height = '0vh';
    document.body.style.position = 'static';
  }

}
