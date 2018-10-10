import { TestBed, inject } from '@angular/core/testing';

import { StudentSubjectService } from './student-subject.service';

describe('StudentSubjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentSubjectService]
    });
  });

  it('should be created', inject([StudentSubjectService], (service: StudentSubjectService) => {
    expect(service).toBeTruthy();
  }));
});
