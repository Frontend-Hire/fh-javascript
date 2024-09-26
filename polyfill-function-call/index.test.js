import { describe, test, expect, beforeAll } from 'vitest';

import { myCall } from '.';

describe('polyfill-function-call', () => {
  beforeAll(() => {
    Function.prototype.myCall = myCall;
  });

  test.todo('', () => {});
});
