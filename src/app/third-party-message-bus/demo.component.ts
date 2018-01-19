import { Component, OnInit } from '@angular/core';
import { ThirdPartyMessageBusService } from './third-party-message-bus.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-demo',
  template: `
    <p>
      <button type="button" (click)="dispatchNativeEvent()">dispatch native CustomEvent</button>
    </p>
    <p>
      <button type="button" (click)="dispatchMessage()">dispatch Message</button>
    </p>
    <ul>
      <li *ngFor="let msg of receivedMessages">{{ msg | json }}</li>
    </ul>
  `
})
export class DemoComponent implements OnInit, OnDestroy {

  public receivedMessages: any[] = [];

  private subscription: Subscription;

  constructor(
    private thirdPartyMessageBus: ThirdPartyMessageBusService
  ) {}

  ngOnInit() {
    this.subscription = this.thirdPartyMessageBus.messages$.subscribe(
      (next) => this.receivedMessages.push(next)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  dispatchNativeEvent() {
    document.dispatchEvent(new CustomEvent('custom.eventType', { detail: {
      type: 'Greetings',
      payload: 'Drakaris!'
    }}))
  }

  dispatchMessage() {
    this.thirdPartyMessageBus.publish({
      type: 'Greetings',
      payload: 'Dragons',
      timestamp: Date.now(),
      native: undefined
    });
  }

}
