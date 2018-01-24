import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredAreaComponent } from './secured-area.component';

describe('SecuredAreaComponent', () => {
  let component: SecuredAreaComponent;
  let fixture: ComponentFixture<SecuredAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuredAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuredAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
