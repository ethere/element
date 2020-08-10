<template>
  <button
    :autofocus="autofocus"
    :type="nativeType"
    @click="e=> $emit('click',e)"
    class="el-button"
    :class="[
    type ? `el-button--${type}`:'',
    size ? `el-button--${size}`:'',
    plain?'is-plain':'',
    {'is-round':round},
    {'is-circle':circle},
    {'is-disabled':disabled}
    ]">
    <i v-if="icon && !loading" :class="[icon]"></i>
    <i v-if="loading" class="el-icon-loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'ElButton',
  props: {
    type: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    icon: String,
    disabled: Boolean,
    loading: Boolean,
    size: String,
    autofocus: Boolean,
    nativeType: {
      type: String,
      default: 'button',
    },
  },
};
</script>
