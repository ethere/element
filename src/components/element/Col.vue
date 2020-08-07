<template>
  <div :class="classList" :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  computed: {
    classList() {
      const list = ['el-col'];
      ['span', 'offset', 'push', 'pull'].forEach((prop) => {
        if (this[prop]) {
          list.push(
            prop === 'span'
              ? `el-col-span-${this.span}`
              : `el-col-${prop}-${this[prop]}`,
          );
        }
      });
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((prop) => {
        if (typeof this[prop] === 'number' && this[prop]) {
          list.push(`el-col-${prop}-${this[prop]}`);
        } else if (typeof this[prop] === 'object') {
          const props = Object.keys(this[prop]);
          props.forEach((p) => {
            if (p === 'span') {
              list.push(`el-col-${prop}-${this[prop][p]}`);
            } else if (this[prop][p]) {
              list.push(`el-col-${prop}-${p}-${this[prop][p]}`);
            }
          });
        }
      });
      return list;
    },
    gutter() {
      let parent = this.$parent;
      while (parent && parent.name !== 'ElRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : '';
    },
    style() {
      const pad = {};
      if (this.gutter) {
        pad.paddingLeft = `${this.gutter / 2}px`;
        pad.paddingRight = `${this.gutter / 2}px`;
      }
      return pad;
    },
  },
};
</script>
<style lang="scss">
.el-col {
  float: left;
  box-sizing: border-box;
}
@for $i from 0 through 24 {
  .el-col-span-#{$i} {
    width: $i / 24 * 100%;
  }
  .el-col-offset-#{$i} {
    margin-left: $i / 24 * 100%;
  }
  .el-col-push-#{$i} {
    position: relative;
    left: $i / 24 * 100%;
  }
  .el-col-pull-#{$i} {
    position: relative;
    right: $i / 24 * 100%;
  }
}
@media screen and (max-width: 768px - 1) {
  @for $i from 0 through 24 {
    .el-col-xs-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-xs-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
    .el-col-xs-push-#{$i} {
      position: relative;
      left: $i / 24 * 100%;
    }
    .el-col-xs-pull-#{$i} {
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}
@media screen and (min-width: 768px) {
  @for $i from 0 through 24 {
    .el-col-sm-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-sm-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
    .el-col-sm-push-#{$i} {
      position: relative;
      left: $i / 24 * 100%;
    }
    .el-col-sm-pull-#{$i} {
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}
@media screen and (min-width: 992px) {
  @for $i from 0 through 24 {
    .el-col-md-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-md-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
    .el-col-md-push-#{$i} {
      position: relative;
      left: $i / 24 * 100%;
    }
    .el-col-md-pull-#{$i} {
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}
@media screen and (min-width: 1200px) {
  @for $i from 0 through 24 {
    .el-col-lg-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-lg-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
    .el-col-lg-push-#{$i} {
      position: relative;
      left: $i / 24 * 100%;
    }
    .el-col-lg-pull-#{$i} {
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}
@media screen and (min-width: 1920px) {
  @for $i from 0 through 24 {
    .el-col-xl-#{$i} {
      width: $i / 24 * 100%;
    }
    .el-col-xl-offset-#{$i} {
      margin-left: $i / 24 * 100%;
    }
    .el-col-xl-push-#{$i} {
      position: relative;
      left: $i / 24 * 100%;
    }
    .el-col-xl-pull-#{$i} {
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}
</style>
