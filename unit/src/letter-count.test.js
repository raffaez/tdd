import { expect } from 'chai';
import { getLetterCount } from './letter-count';

describe('getLetterCount - basic functionality', () => {
  it('returns an empty object when passed an empty string', () => {
    const expected = {};
    const actual = getLetterCount('');
    expect(actual).to.deep.equal(expected);
  });

  it('return the correct letter count for a word with one of each letter', () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount('cat');
    expect(actual).to.deep.equal(expected);
  });

  it('return the correct letter count for a word with multiple of certain letters', () => {
    const expected = { r: 1, a: 2, f: 1, e: 2, l: 1 };
    const actual = getLetterCount('rafaele');
    expect(actual).to.deep.equal(expected);
  })
})