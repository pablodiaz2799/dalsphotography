import { Component, OnInit } from '@angular/core';
import { homeRoutes } from '../shared/routes/img.routes';
import { Lightbox, LightboxEvent, LIGHTBOX_EVENT } from 'ngx-lightbox';
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
  constructor(private lightbox: Lightbox, private lightboxEvent: LightboxEvent) { }

  ngOnInit(): void {
    this.images = homeRoutes;
  }

  open(i): void {
    this.lightbox.open(this.images, i);
    this.move = 0;
    this.subscription = this.lightboxEvent.lightboxEvent$
    .subscribe(event => this._onReceivedEvent(event));
  }

  private _onReceivedEvent(event: any): void {
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      this.move = 5000;
      this.subscription.unsubscribe();
    }
  }

}
