import 'dotenv/config';

function secret(expectedSecret) {
  // eslint-disable-next-line no-undef
  const secretMatches = process.env.MEANING_OF_LIFE == expectedSecret;
  // eslint-disable-next-line no-undef
  console.log(`The meaning of life is ${process.env.MEANING_OF_LIFE}`);
  console.log(`The secret does${secretMatches ? '' : ' not'} match!`);
  return secretMatches;
}

secret(42);
