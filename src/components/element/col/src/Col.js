export default {
  name: 'ElCol',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
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
      while (parent && parent.$options.name !== 'ElRow') {
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
  render(h) {
    return h(this.tag, {
      class: this.classList,
      style: this.style,
    }, this.$slots.default);
  },
};
