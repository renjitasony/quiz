import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditablequestionComponent } from './editablequestion.component';

describe('EditablequestionComponent', () => {
  let component: EditablequestionComponent;
  let fixture: ComponentFixture<EditablequestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditablequestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditablequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
