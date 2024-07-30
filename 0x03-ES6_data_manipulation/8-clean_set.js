export default function cleanSet(set, startString) {
  const newset = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      newset.push(value.substring(startString.length));
    }
  }
  return newset.join('-');
}
