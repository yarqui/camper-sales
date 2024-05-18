// TODO: check if needed
const debounce = (func, delay) => {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const reverseLocation = (location) =>
  location?.split(", ").reverse().join(", ");

export { debounce, reverseLocation };
