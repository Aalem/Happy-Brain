import { TestBed, inject } from '@angular/core/testing';

import { MentorSubjectService } from './mentor-subject.service';

describe('MentorSubjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MentorSubjectService]
    });
  });

  it('should be created', inject([MentorSubjectService], (service: MentorSubjectService) => {
    expect(service).toBeTruthy();
  }));
});
