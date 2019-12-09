import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormsClientCreationComponent } from "./forms-client-creation.component";

describe("FormsClientCreationComponent", () => {
  let component: FormsClientCreationComponent;
  let fixture: ComponentFixture<FormsClientCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsClientCreationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsClientCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
