export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const createdbuffer = new DataView(new ArrayBuffer(length), 0, length);
  createdbuffer.setInt8(position, value);
  return createdbuffer;
}
