import { describe, test, beforeAll } from 'vitest';

import { myMap } from '.';

describe('polyfill-array-map', () => {
  beforeAll(() => {
    Array.prototype.myMap = myMap;
  });

  test.todo('', () => {});
});
