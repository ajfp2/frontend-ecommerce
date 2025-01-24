import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { articleNewDeactivateGuard } from './article-new-deactivate.guard';

describe('articleNewDeactivateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => articleNewDeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
