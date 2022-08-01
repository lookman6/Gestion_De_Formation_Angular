import { TestBed } from '@angular/core/testing';

import { GroupePersonnelService } from './groupe-personnel.service';

describe('GroupePersonnelService', () => {
  let service: GroupePersonnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupePersonnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
