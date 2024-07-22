export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const elementidx of array) {
    newArray.push(`${appendString}${elementidx}`);
  }

  return newArray;
}
