export function rotateLeft<T>(arr: T[], k: number): T[] {
  if (arr.length === 0) return arr;

  k = k % arr.length;
  return arr.slice(k).concat(arr.slice(0, k));
}
