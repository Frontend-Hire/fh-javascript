import { describe, test, expect, beforeAll } from 'vitest';

import { myApply } from '.';

describe('polyfill-function-apply', () => {
  beforeAll(() => {
    Function.prototype.myApply = myApply;
  });

  test.todo('', () => {});
});
