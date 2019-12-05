import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcheancierComponent } from './echeancier.component';

describe('EcheancierComponent', () => {
  let component: EcheancierComponent;
  let fixture: ComponentFixture<EcheancierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcheancierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcheancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
