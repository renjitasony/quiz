import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestioncontentComponent } from './questioncontent.component';

describe('QuestioncontentComponent', () => {
  let component: QuestioncontentComponent;
  let fixture: ComponentFixture<QuestioncontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestioncontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestioncontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
