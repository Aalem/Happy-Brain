import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorAssignmentComponent } from './mentor-assignment.component';

describe('MentorAssignmentComponent', () => {
  let component: MentorAssignmentComponent;
  let fixture: ComponentFixture<MentorAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
