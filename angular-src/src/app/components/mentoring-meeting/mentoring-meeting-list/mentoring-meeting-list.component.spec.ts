import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoringMeetingListComponent } from './mentoring-meeting-list.component';

describe('MentoringMeetingListComponent', () => {
  let component: MentoringMeetingListComponent;
  let fixture: ComponentFixture<MentoringMeetingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentoringMeetingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoringMeetingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
