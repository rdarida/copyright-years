/**
 * Generates a dynamic copyright year range string.
 *
 * The function clamps invalid or future values to the current year.
 *
 * @param startYear The initial year the copyright started.
 *                  Defaults to the current year.
 *
 * @returns The formatted copyright year or year range
 *          (e.g., "2026" or "2024-2026").
 *
 * @example
 * // If the current year is 2026:
 * copyrightYears(2024); // returns "2024-2026"
 * copyrightYears(2026); // returns "2026"
 * copyrightYears(2030); // returns "2026"
 * copyrightYears(-1); // returns "2026"
 * copyrightYears('invalid'); // returns "2026"
 */
export function copyrightYears(startYear = new Date().getFullYear()): string {
  const currentYear = new Date().getFullYear();

  let parsedYear = Number(startYear);

  if (Number.isNaN(parsedYear) || parsedYear < 0) {
    parsedYear = currentYear;
  }

  parsedYear = Math.min(parsedYear, currentYear);

  if (parsedYear < currentYear) {
    return `${parsedYear}-${currentYear}`;
  }

  return `${currentYear}`;
}
