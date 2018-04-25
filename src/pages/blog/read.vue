<template>
  <article class="post">
    <h1 class="title">{{ blog.title }}</h1>
    <time class="time"><i class="fa fa-calendar"></i> {{ blog.updateTime }}</time>
    <span class="read"><i class="fa fa-eye"></i> {{ blog.readCount }}</span>
    <article class="content" v-html="blog.htmlCode"></article>
  </article>
</template>

<script>
export default {
  data () {
    return {
      blog: {
        id: 1,
        title: '测试文章--测试文章--测试文章',
        updateTime: '2018-04-25',
        abstract: '',
        htmlCode: '<h1>Node安装教程</h1><blockquote><p>注意：以下步骤只针对Windows系统</p></blockquote> <h2>第一步 文件下载</h2><p>下载群里的<code>node-v6.11.4-win-x64.zip</code>文件。</p><h2>第二步 文件解压</h2><p>在资源管理器中找到第一步下载文件，右键单击，进行解压，双击打开解压后的文件夹，这时候使用<code>Ctrl+C</code>复制资源管理器地址栏的地址。</p><h2>第三步环境变量配置</h2><ol><li><p>电脑左下角搜索栏输入<strong>系统</strong>二字进行搜索，Win7系统单击搜索结果中<strong>控制面板</strong>下的<strong>系统</strong>进入系统页面，Win10系统单击搜索结果中<strong>设置</strong>下的<strong>系统</strong>进入系统页面，分别如图1、2所示。</p><p>​<img src="http://opzww7anw.bkt.clouddn.com/mk/image/blog/win7-search-sys.png"alt="win7-search-system"/></p><p>​图1Win7搜索<strong>系统</strong>结果</p><p>​<img src="http://opzww7anw.bkt.clouddn.com/mk/image/blog/win10-search-sys.png"alt="win7-search-system"/></p><p>​图2Win10搜索<strong>系统</strong>结果</p></li><li><p>点击左侧<strong>高级系统设置</strong>弹出系统属性对话框。</p><p>​<img src="http://opzww7anw.bkt.clouddn.com/mk/image/blog/win7-sys.png"alt="win7-system"/></p></li><li><p>选择<strong>高级</strong>选项卡，点击右下角位置<strong>环境变量</strong>按钮，弹出环境变量设置对话框。。</p><p>​<img src="http://opzww7anw.bkt.clouddn.com/mk/image/blog/win7-sys-prop.jpg"alt="win7-system-property"/></p></li><li><p>在系统变量栏找到<code>Path</code>，单击后点击下方的<strong>编辑</strong>按钮，弹出编辑系统变量对话框。</p><p>​<img src="http://opzww7anw.bkt.clouddn.com/mk/image/blog/win7-env-var.jpg"alt="win7-env-var"/></p></li><li><p>Win7系统在变量值得输入框中末尾添加一个英文分号<code>;</code>，再将第二步复制的内容<code>Ctrl+V</code>粘贴进去即可，<strong>注意千万不能把原来的那些字符删掉，也不要修改</strong>如图3所示，Win10系统在环境变量编辑对话框中点击右侧<strong>新建</strong>按钮，再将第二步复制的内容<code>Ctrl+V</code>粘贴到图5中的②处框中即可，如图4所示。</p><p>​<img src="http://opzww7anw.bkt.clouddn.com/mk/image/blog/win7-env-var-edit.jpg"alt="win7-env-var-edit"/></p><p>​图3Win7编辑系统变量</p><p>​<img src="http://opzww7anw.bkt.clouddn.com/mk/image/blog/win10-env-var-edit.png"alt="win10-env-var-edit"/></p><p>​图4Win10编辑系统变量</p></li><li><p>依次点击每个弹出对话框的<strong>确定</strong>按钮关闭所有对话框即可。</p></li></ol><h2>第四步验证是否安装成功</h2><p>按<code>Win+R</code>键，在弹出的框中输入<code>cmd</code>，然后点击确定或按<code>enter</code>键打开命令行，在命令行中输入<code>node-v</code>，如图所示，如果输出<code>v6.11.4</code>，则说明node安装成功，如图5所示。</p><p>​<img src="http://opzww7anw.bkt.clouddn.com/mk/image/blog/node-v.png"alt="node-v"/></p><p>本教程完😊。</p>',
        mdCode: '',
        type: {
          id: 0,
          name: '前端'
        },
        tags: ['前端', '博客搭建', 'Vue', 'MVVM', 'MongoDB'],
        readCount: 233
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
.post {
  padding: 10px 15px;
  .title {
    color: $hbg1;
  }
  .read {
    display: inline-block;
    margin-left: 20px;
  }
  .content {
    border-width: 2px 0px;
    margin-top: 10px;
    padding: 10px 0;
    border-style: solid;
  }
}
</style>
