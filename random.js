module.exports = randomSixLetters;

function randomSixLetters() {
  const charset = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let text = '';

  for (let i = 0; i < 6; i++) {
    text += charset[Math.floor(Math.random() * charset.length)];
  }

  return text;
}
