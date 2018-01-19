import { TestBed, inject } from '@angular/core/testing';

import { ThirdPartyMessageBusService } from './third-party-message-bus.service';

describe('ThirdPartyMessageBusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThirdPartyMessageBusService]
    });
  });

  it('should be created', inject([ThirdPartyMessageBusService],
    (service: ThirdPartyMessageBusService) => {
      expect(service).toBeTruthy();
    }
  ));
});
