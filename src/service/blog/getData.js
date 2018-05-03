import fetch from '../../config/fetch';

const getBlogTypes = () => fetch('/blog/getBlogAllTypes');

export {
  getBlogTypes
};
