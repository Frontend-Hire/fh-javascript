import { describe, test, beforeAll } from 'vitest';
import { myAll } from './polyfill-promise-all';

describe('myAll', () => {
  beforeAll(() => {
    // We attach the polyfill to the constructor of the Promise object
    // and not to the prototype!
    Promise.myAll = myAll;
  });

  test.todo('', () => {});
});
