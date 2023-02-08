import { isEqual } from 'lodash';
import { getLetterCount } from './letter-count';

export const isAnagram = (string1, string2) => {
  const s1Count = getLetterCount(string1.replace(/ /g, '').toLowerCase());
  const s2Count = getLetterCount(string2.replace(/ /g, '').toLowerCase());

  return isEqual(s1Count, s2Count);
}