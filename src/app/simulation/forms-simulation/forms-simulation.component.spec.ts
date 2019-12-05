import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSimulationComponent } from './forms-simulation.component';

describe('FormsSimulationComponent', () => {
  let component: FormsSimulationComponent;
  let fixture: ComponentFixture<FormsSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
