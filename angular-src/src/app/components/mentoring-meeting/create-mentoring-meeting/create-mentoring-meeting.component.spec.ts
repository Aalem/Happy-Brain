import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMentoringMeetingComponent } from './create-mentoring-meeting.component';

describe('CreateMentoringMeetingComponent', () => {
  let component: CreateMentoringMeetingComponent;
  let fixture: ComponentFixture<CreateMentoringMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMentoringMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMentoringMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
