// Hint: use setInterval, create a new Promise and measure time with Date.now()
const MAX_TIME = 500 * 500;
export function delay(time) {
  return new Promise((resolve, reject) => {
    if (time >= MAX_TIME) {
      reject(new Error('This time is too much !'));
    }
    setTimeout(() => resolve(time), time);
  });
}

export async function asyncDelay(time) {
  await setTimeout(time);
  return time;
}
