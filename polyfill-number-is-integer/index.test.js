import { describe, test, beforeAll } from 'vitest';
import { myIsInteger } from '.';

describe('myIsInteger', () => {
  beforeAll(() => {
    // We attach the polyfill to the constructor of the Promise object
    // and not to the prototype!
    Number.myIsInteger = myIsInteger;
  });

  test.todo('', () => {});
});
