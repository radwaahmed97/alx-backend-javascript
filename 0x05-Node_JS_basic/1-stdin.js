/**
 * program named 1-stdin.js executed through command line
 * @param {string} input - input from command line
 * @returns {string} - output to command line
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) {
    process.stdout.write(`Your name is: ${input}\n`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
