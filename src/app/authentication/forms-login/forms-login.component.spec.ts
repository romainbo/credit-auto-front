import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLoginComponent } from './forms-login.component';

describe('FormsLoginComponent', () => {
  let component: FormsLoginComponent;
  let fixture: ComponentFixture<FormsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
