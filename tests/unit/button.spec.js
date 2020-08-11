import Button from '@element/button';
import { shallowMount } from '@vue/test-utils';

describe('Button.vue', () => {
  let wrapper;
  let el;
  beforeEach(() => {
    wrapper = shallowMount(Button);
    el = wrapper.vm.$el;
  });
  it('create', () => {
    expect(el.classList).toContain('el-button');
  });
  it('size', () => {
    el.setProps({
      size: 'mini',
    });
    expect(el.classList).toContain('el-button--mini');
  });
});
