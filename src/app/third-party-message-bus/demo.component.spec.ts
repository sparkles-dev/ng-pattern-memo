import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoComponent } from './demo.component';
import { ThirdPartyMessageBusService } from './third-party-message-bus.service';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoComponent ],
      providers: [ ThirdPartyMessageBusService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
