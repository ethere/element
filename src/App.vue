<template>
  <div id="app">
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">
        下一页
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </el-button-group>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
    </el-button-group>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit" round></el-button>
    </el-button-group>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.el-button-group {
  margin-left: 20px;
}
</style>
