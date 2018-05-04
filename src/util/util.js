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

/**
 * 设置本地Cookies
 * @param {String} key
 * @param {String} value
 * @param {Number} expire
 */
export function setCookie ({ key, value, expire }) {
  let expiredays = expire || 1;
  let exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = key + '=' + escape(value) + ((expiredays === null) ? '' : ';expires=' + exdate.toGMTString());
};
/**
 * 获取本地Cookie
 * @param {String} key
 * @return {String} Cookie值
 */
export function getCookie (key) {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(key + '=');
    if (cStart !== -1) {
      cStart = cStart + key.length + 1;
      let cEnd = document.cookie.indexOf(';', cStart);
      if (cEnd === -1) cEnd = document.cookie.length;
      return unescape(document.cookie.substring(cStart, cEnd));
    }
  }
  return '';
};
/**
 * 时间格式化函数
 * @param {String} format 格式化字符串
 * @param {Number} timestamp 日期戳
 * @return {String} 格式化之后的字符串
 */
export function timeFormat (timestamp, format) {
  let fmt = format || 'yyyy-MM-dd hh:mm:ss';
  let date = new Date(timestamp);
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
};

export function isEmail (email) {
  let reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
  return reg.test(email);
};

/**
 * 去除HTML标签，获得摘要
 * @param {String} str 原字符串
 * @param {Number} length 摘要长度
 * @return {String}
 */
export function getAbstract (str, length) {
  let len = length || 200;
  let ret = str.replace(/<\/?[a-zA-Z]+[^><]*>/ig, '');
  return ret.substr(0, len);
};
