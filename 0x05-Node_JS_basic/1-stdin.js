const displayMessage = require('./0-console');
/**
 * program named 1-stdin.js executed through command line
 * @param {string} input - input from command line
 * @returns {string} - output to command line
 */
displayMessage('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) {
    displayMessage(`Your name is: ${input}`);
  }
});
process.stdin.on('end', () => {
  displayMessage('This important software is now closing');
});
