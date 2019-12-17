import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesModificationComponent } from './rates-modification.component';

describe('RatesModificationComponent', () => {
  let component: RatesModificationComponent;
  let fixture: ComponentFixture<RatesModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatesModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
