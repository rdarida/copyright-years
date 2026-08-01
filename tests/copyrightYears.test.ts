import { describe, it, expect } from 'vitest';

import { copyrightYears } from '../src/copyrightYears';

describe('Test copyrightYears function', () => {
  it('should return the current year if no start year is provided', () => {
    const currentYear = new Date().getFullYear();
    expect(copyrightYears()).toBe(`${currentYear}`);

    let startYear = currentYear - 1;
    expect(copyrightYears(startYear)).toBe(`${startYear}-${currentYear}`);

    startYear = currentYear;
    expect(copyrightYears(startYear)).toBe(`${currentYear}`);

    startYear = currentYear + 1;
    expect(copyrightYears(startYear)).toBe(`${currentYear}`);

    startYear = -1;
    expect(copyrightYears(startYear)).toBe(`${currentYear}`);

    expect(copyrightYears(Number.NaN)).toBe(`${currentYear}`);
  });
});
