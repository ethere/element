<template>
    <div
    :style="style"
    :class="[
    'el-row',
    {'el-row--fix': type==='flex'},
    justify !== 'start' && `is-justify-${justify}`,
    align !== 'top' && `is-align-${align}`
    ]"
    >
        <slot></slot>
    </div>
</template>
<script>
export default {
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    type: String,
    justify: {
      type: String,
      default: 'start',
      validator: (val) => ['start', 'end', 'center', 'space-between', 'space-around'].includes(val),
    },
    align: {
      type: String,
      default: 'top',
      validator: (val) => ['top', 'middle', 'bottom'].includes(val),
    },
  },
  data() {
    return {
      name: 'ElRow',
    };
  },
  computed: {
    style() {
      const style = {};
      if (this.gutter) {
        style.marginLeft = `${-this.gutter / 2}px`;
        style.marginRight = `${-this.gutter / 2}px`;
      }
      return style;
    },
  },
};
</script>
<style lang="scss">
.el-row{
    &::after{
        display: block;
        clear: both ;
        content: '';
    }
    &--fix{
        display: flex;
        &::after{
            display: none;
        }
        &.is-justify-end{
            justify-content: flex-end;
        }
        &.is-justify-center{
            justify-content: center;
        }
        &.is-justify-space-between{
            justify-content: space-between;
        }
        &.is-justify-space-around{
            justify-content: space-around;
        }
        &.is-align-middle{
            align-items: center;
        }
        &.is-align-bottom{
            align-items: flex-end;
        }
    }
}
</style>
