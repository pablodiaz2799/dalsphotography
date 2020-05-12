import { Component, OnInit } from '@angular/core';
import { homeRoutes } from '../shared/routes/img.routes';
import { Lightbox, LightboxEvent, LIGHTBOX_EVENT, LightboxConfig } from 'ngx-lightbox';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public images: any = [];
  public move = 5000;
  private subscription: Subscription;
  public opened = false;
  constructor(private lightbox: Lightbox, private lightboxEvent: LightboxEvent, private lightboxConfig: LightboxConfig) {
    // this.lightboxConfig.fitImageInViewPort = false;
    // this.lightboxConfig.disableScrolling = true;
    this.lightboxConfig.wrapAround = true;
  }

  ngOnInit(): void {
    this.images = homeRoutes;
  }

  open(i): void {
    this.lightbox.open(this.images, i);
    this.move = 0;
    this.opened = true;
    this.subscription = this.lightboxEvent.lightboxEvent$
    .subscribe(event => this._onReceivedEvent(event));
  }

  private _onReceivedEvent(event: any): void {
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      this.move = 5000;
      this.opened = false;
      this.subscription.unsubscribe();
    }
  }

}
