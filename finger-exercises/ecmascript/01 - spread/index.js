import { isArray } from './utils';

export function min(...num) {
  if (isArray(...num)) {
    return Math.min.apply(null, ...num);
  }
  return Math.min(...num);
}

export function copy() {

}
