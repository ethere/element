<template>
    <a
    class="el-link"
    :href="href"
    :class="[
    type?`el-link--${type}`:'',
    {'is-underline':underline&&!disabled},
    {'is-disabled':disabled}
    ]"
    >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    </a>
</template>
<script>
export default {
  name: 'ElLink',
  props: {
    type: String,
    underline: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    href: String,
    icon: String,
  },
};
</script>
