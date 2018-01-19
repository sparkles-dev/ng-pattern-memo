import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map } from 'rxjs/operators';

/** A message bus for receiving `CustomEvent` from third-party broadcasters. */
const MESSAGE_BUS$: Subject<CustomEvent> = new ReplaySubject();

/** Event type for native `CustomEvent` */
export const MESSAGE_BUS_EVENT_TYPE = 'custom.eventType';

fromEvent(document, MESSAGE_BUS_EVENT_TYPE)
  .subscribe(MESSAGE_BUS$);

export interface Message {
  type: string;
  timestamp: number;
  payload: any;
  native: CustomEvent
}

@Injectable()
export class ThirdPartyMessageBusService {

  // Connects the Angular service to the message bus
  private messageBus$ = MESSAGE_BUS$;

  public get messages$(): Observable<Message> {
    return this.messageBus$
      .asObservable()
      .pipe(
        map((customEvent: CustomEvent): Message => ({
          type: customEvent.detail.type,
          payload: customEvent.detail.payload,
          timestamp: customEvent.timeStamp,
          native: customEvent
        }))
      );
  }

  public publish(msg: Message) {
    this.messageBus$.next(new CustomEvent(MESSAGE_BUS_EVENT_TYPE, { detail: {
      ...msg
    }}));
  }

}
