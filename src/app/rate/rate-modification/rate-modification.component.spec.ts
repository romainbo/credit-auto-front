import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateModificationComponent } from './rate-modification.component';

describe('RateModificationComponent', () => {
  let component: RateModificationComponent;
  let fixture: ComponentFixture<RateModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
