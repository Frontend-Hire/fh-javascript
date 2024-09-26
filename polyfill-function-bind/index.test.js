import { describe, test, beforeAll } from 'vitest';

import { myBind } from '.';

describe('polyfill-function-bind', () => {
  beforeAll(() => {
    Function.prototype.myBind = myBind;
  });

  test.todo('', () => {});
});
