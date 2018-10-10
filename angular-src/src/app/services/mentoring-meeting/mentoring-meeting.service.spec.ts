import { TestBed, inject } from '@angular/core/testing';

import { MentoringMeetingService } from './mentoring-meeting.service';

describe('MentoringMeetingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MentoringMeetingService]
    });
  });

  it('should be created', inject([MentoringMeetingService], (service: MentoringMeetingService) => {
    expect(service).toBeTruthy();
  }));
});
