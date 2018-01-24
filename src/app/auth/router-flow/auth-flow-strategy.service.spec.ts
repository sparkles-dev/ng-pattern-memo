import { TestBed, inject } from '@angular/core/testing';

import { AuthFlowStrategyService } from './auth-flow-strategy.service';

describe('AuthFlowStrategyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthFlowStrategyService]
    });
  });

  it('should be created', inject([AuthFlowStrategyService], (service: AuthFlowStrategyService) => {
    expect(service).toBeTruthy();
  }));
});
