// Hint: use setInterval, create a new Promise and measure time with Date.now()
const MAX_TIME = 500 * 500;
export function delay(time) {
  return new Promise(function(resolve, reject) {
    if (time >= MAX_TIME) {
      reject(new Error('This time is too much !'));
    }
    setTimeout(function() {
      resolve(time);
  }, time)
  });
}

export function asyncDelay() {

}
