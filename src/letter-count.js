export const getLetterCount = string => {
  const letters = string.split('').reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {});

  return letters;
};