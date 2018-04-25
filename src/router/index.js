import Vue from 'vue';
import Router from 'vue-router';

const hello = r => require.ensure([], () => r(require('../components/hello')), 'hello');
const recordyou = r => require.ensure([], () => r(require('../pages/design/recordyou')), 'recordyou');
const blog = r => require.ensure([], () => r(require('../pages/blog/blog')), 'blog');
const read = r => require.ensure([], () => r(require('../pages/blog/read')), 'read');
const edit = r => require.ensure([], () => r(require('../pages/blog/edit')), 'edit');

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: hello
  }, {
    path: '/home',
    component: hello
  }, {
    path: '/design/recordyou/',
    component: recordyou
  }, {
    path: '/blog/edit',
    component: edit
  }, {
    path: '/blog/index',
    component: blog
  }, {
    path: '/blog/read/:id',
    component: read
  }]
});
