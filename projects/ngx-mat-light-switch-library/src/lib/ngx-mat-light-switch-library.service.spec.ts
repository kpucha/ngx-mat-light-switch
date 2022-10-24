import { TestBed } from '@angular/core/testing';

import { NgxMatLightSwitchLibraryService } from './ngx-mat-light-switch-library.service';

describe('NgxMatLightSwitchLibraryService', () => {
  let service: NgxMatLightSwitchLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatLightSwitchLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
