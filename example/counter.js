export function setupCounter(element, cb) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
    typeof cb === 'function' && cb(counter);
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
