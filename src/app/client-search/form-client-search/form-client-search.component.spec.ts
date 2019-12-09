import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormClientSearchComponent} from './form-client-search.component';

describe('FormClientSearchComponent', () => {
  let component: FormClientSearchComponent;
  let fixture: ComponentFixture<FormClientSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormClientSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormClientSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
