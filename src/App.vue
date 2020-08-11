<template>
  <div id="app">
    <el-row>
      <el-button type="primary" size="mini">默认按钮</el-button>
      <el-button autofocus type="primary" >自动聚焦</el-button>
      <el-button type="primary" native-type="submit">按钮</el-button>
      <el-button type="primary" @click="handleClick">点击事件按钮</el-button>
    </el-row>
    <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClick() {
      console.log('xxx');
    },
  },
};
</script>

<style>
.el-button-group {
  margin-left: 20px;
}
</style>
