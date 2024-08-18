import { describe, test, beforeAll } from 'vitest';

import { myFilter } from '.';

describe('polyfill-array-filter', () => {
  beforeAll(() => {
    Array.prototype.myFilter = myFilter;
  });

  test.todo('', () => {});
});
