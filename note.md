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

测试：

两个挂载方法 来自@vue/test-utils
- Mount 把子组件都进行渲染
- shallowMount  只渲染自己的组件，不管子组件

```js
import Row from '@element/row';
import { shallowMount } from '@vue/test-utils';
//测试
describe('Row.vue',()=>{
  let wrapper;
  let rowEle;
  
  beforeEach(()=>{
    wrapper = shallowMount(Row);
    rowEle = wrapper.vm.$el;;
  })
  it('create',()=>{
    expect(rowEle.classList).toContain('el-row');
  })

  it('gutter',()=>{
    wrapper.setProps({gutter:20});
    expect(rowEle.style.marginLeft).toBe('-10px');
  })

  it('type',()=>{
    wrapper.setProps({type:'flex'});
    expect(rowEle.classList).toContain('el-row--fix');
  })
})
```

vue.config.js 是用在开发环境，在测试环境下有一些配置的数据会用不了

测试框架在 jest.config.js文件中可配置

```cmd
按p 选择某个文件去测试
```