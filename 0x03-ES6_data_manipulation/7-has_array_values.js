export default function hasValuesFromArray(set, Array) {
  for (const value of Array) {
    if (!set.has(value)) {
      return false;
    }
  }
  return true;
}
