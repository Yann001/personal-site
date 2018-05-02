/**
 * 函数节流
 * @param {Function} fn 函数
 * @param {Number} time 间隔时间
 * @param {Function} fncb 回调函数
 */
export function throttle (fn, time = 100, fncb = undefined) {
  let timer;
  return function (...args) {
    if (timer == null) {
      fn.apply(this, args);
      timer = setTimeout(() => {
        timer = null;
        if (fncb) {
          fncb.apply(this);
        }
      }, time);
    }
  };
};
/**
 * 函数消抖
 * @param {Function} fn 函数
 * @param {Number} dur 间隔时间
 */
export function debounce (fn, dur) {
  dur = dur || 100;
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, dur);
  };
};
