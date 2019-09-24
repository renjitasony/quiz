import { TestBed } from '@angular/core/testing';

import { ScriptloaderService } from './scriptloader.service';

describe('ScriptloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScriptloaderService = TestBed.get(ScriptloaderService);
    expect(service).toBeTruthy();
  });
});
