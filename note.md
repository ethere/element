ctrl + `  打开编辑器终端

配置路径
```js
  // const path = require('path');

module.exports = {
  // chainWebpack:(config)=>{
  //     config.resolve.alias.set('@element',path.resolve(__dirname,'src/components/element')),
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@element': '@/components/element',
      },
    },
  },
};
```

```js vue
export default {
  name: 'ElRow' //在子组件可以通过parent.$options.name访问到
}
```

```js
@ //src路径
```

```scss
$name:value;
@mixin b{ 
  @at-root{
    #{$name}{
      @content;
    }
  }
}
@mixin when($state){
  @each $val in $state{

  }
}
@include b(){};
@include when(('block','inline-block'))

//scss文件中的符号两边留空格
```

element-variables.scss文件中可以重新定义变量的值