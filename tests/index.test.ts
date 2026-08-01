import { describe, it, expect } from 'vitest';

import { copyrightYears } from '../src/index';

describe('Test exports', () => {
  it('should export copyrightYears function', () => {
    expect(copyrightYears).toBeDefined();
  });
});
