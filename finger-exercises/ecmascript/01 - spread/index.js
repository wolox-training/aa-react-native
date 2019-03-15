import { isArray } from './utils';

export function min(...num) {
  if (num.length === 0) {
    return undefined;
  }
  if (isArray(...num)) {
    return Math.min.apply(null, ...num);
  }
  return Math.min(...num);
}

export function copy(object) {
  if (object === undefined) {
    return object;
  }
  if (isArray(object)) {
    return [...object];
  }
  return { ...object };
}
