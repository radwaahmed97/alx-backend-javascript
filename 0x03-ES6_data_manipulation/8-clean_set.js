export default function cleanSet(set, startString) {
  const newset = [];
  if (!startString) {
    return '';
  }
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      newset.push(value.substring(startString.length));
    }
  }
  return newset.join('-');
}
