export const createBoard = () =>
  Array(15).fill(null).map(() => Array(15).fill(''));

export const letterScores = {
  A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4,
  I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3,
  Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8,
  Y: 4, Z: 10,
};

export const initialLetterBag = () => {
  const frequencies = {
    A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2,
    I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2,
    Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1,
    Y: 2, Z: 1,
  };

  const bag = [];
  for (const [letter, count] of Object.entries(frequencies)) {
    for (let i = 0; i < count; i++) {
      bag.push(letter);
    }
  }

  for (let i = bag.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [bag[i], bag[j]] = [bag[j], bag[i]];
  }

  return bag;
};

export const drawLetters = (bag, count) => {
  const drawn = bag.slice(0, count);
  const newBag = bag.slice(count);
  return { drawn, newBag };
};
