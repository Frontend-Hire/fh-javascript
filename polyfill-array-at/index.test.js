import { describe, test, beforeAll } from 'vitest';

import { myAt } from '.';

describe('polyfill-array-at', () => {
  beforeAll(() => {
    Array.prototype.myAt = myAt;
  });

  test.todo('', () => {});
});
