export default {
  name: 'ElRow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    tag: {
      type: String,
      default: 'div',
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
  render(h) {
    return h(this.tag, {
      style: this.style,
      class: [
        'el-row',
        {
          'el-row--fix': this.type === 'flex',
        },
        this.justify !== 'start' && `is-justify-${this.justify}`,
        this.align !== 'top' && `is-align-${this.align}`,
      ],
    }, this.$slots.default);
  },
};
