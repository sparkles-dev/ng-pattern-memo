import { TestBed, inject } from '@angular/core/testing';
import { EagerServiceCreationModule } from './eager-service-creation.module';
import * as eager from './eager.service';
import * as lazy from './lazy.service';

xdescribe(`EagerServiceCreationModule`, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EagerServiceCreationModule]
    });
  });

  it(`should eagerly create EagerService`, () => {
    expect(eager.SIDE_EFFECT_ON_INIT).toEqual(true);
  });

  it(`should not create LazyService`, () => {
    expect(lazy.SIDE_EFFECT_ON_INIT).toEqual(false);
  });
});
