import fetch from '../../config/fetch';

const getBlogTypes = () => fetch('/blog/getBlogAllTypes');
const saveBlog = data => fetch('/blog/save', data, 'POST');
const getBlog = id => fetch('/blog/getBlog', id);
const getBlogListByTime = data => fetch('/blog/getBlogListByTime', data);

export {
  getBlogTypes,
  saveBlog,
  getBlog,
  getBlogListByTime
};
