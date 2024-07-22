export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line no-const-assign
    const task = true;
    const task2 = false;
    if (task && task2) {
      return [task, task2];
    }
  }
  return [task, task2];
}
