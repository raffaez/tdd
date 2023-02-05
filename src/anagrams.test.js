import { isAnagram } from './anagrams';
import { expect } from 'chai';

describe('isAnagram - basic functionality', () => {
  it('returns true when two known anagrams are passed', () => {
    const expected = true;
    const actual = isAnagram('listen', 'silent');
    expect(actual).to.equal(expected);
  });

  it('returns false when a string has extra letters', () => {
    const expected = false;
    const actual = isAnagram('elbows', 'below');
    expect(actual).to.equal(expected);

    const expected2 = false;
    const actual2 = isAnagram('below', 'elbows');
    expect(actual2).to.equal(expected2);
  });

  it('returns false when the string have the same letters in different quantities', () => {
    const expected = false;
    const actual = isAnagram('listens', 'silent');
    expect(actual).to.equal(expected);
  });

  it('returns true when the strings have spaces', () => {
    const expected = true;
    const actual = isAnagram('conversation', 'voices ranton');
    expect(actual).to.equal(expected);
  });

  it('returns true when the string have different cases', () => {
    const expected = true;
    const actual = isAnagram('STATE', 'taste');
    expect(actual).to.equal(expected);
  })
});