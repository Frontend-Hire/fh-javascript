import { describe, test, beforeAll } from 'vitest';

import { myReduce } from '.';

describe('polyfill-array-reduce', () => {
  beforeAll(() => {
    Array.prototype.myReduce = myReduce;
  });

  test.todo('', () => {});
});
