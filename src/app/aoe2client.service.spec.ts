import { TestBed } from '@angular/core/testing';

import { Aoe2ClientService } from './aoe2client.service';

describe('Aoe2clientService', () => {
  let service: Aoe2ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Aoe2ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
