import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCreationComponent } from './contract-creation.component';

describe('ContractCreationComponent', () => {
  let component: ContractCreationComponent;
  let fixture: ComponentFixture<ContractCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
