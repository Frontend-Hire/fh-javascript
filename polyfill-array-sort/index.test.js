import { describe, test, beforeAll } from 'vitest';

import { mySort } from '.';

describe('polyfill-array-sort', () => {
  beforeAll(() => {
    Array.prototype.mySort = mySort;
  });

  test.todo('', () => {});
});
