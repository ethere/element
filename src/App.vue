<template>
  <div id="app">
    <el-button type="text">文字按钮</el-button>
    <el-button type="text" disabled>文字按钮</el-button>
    <el-button type="primary" icon="el-icon-edit"></el-button>
    <el-button type="primary" icon="el-icon-share"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button type="primary">
      上传
      <i class="el-icon-upload el-icon--right"></i>
    </el-button>
    <el-button type="primary" :loading="true">加载中</el-button>
    <el-row>
  <el-button>默认按钮</el-button>
  <el-button size="medium">中等按钮</el-button>
  <el-button size="small">小型按钮</el-button>
  <el-button size="mini">超小按钮</el-button>
</el-row>
<el-row>
  <el-button round>默认按钮</el-button>
  <el-button size="medium" round>中等按钮</el-button>
  <el-button size="small" round>小型按钮</el-button>
  <el-button size="mini" round>超小按钮</el-button>
</el-row>
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button size="medium" type="primary" icon="el-icon-edit" circle></el-button>
      <el-button size="small" type="success" icon="el-icon-check" circle></el-button>
      <el-button size="mini"  type="info" icon="el-icon-message" circle></el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
</style>
