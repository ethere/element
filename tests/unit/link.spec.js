import Link from '@element/link';
import { shallowMount } from '@vue/test-utils';

describe('Link.vue', () => {
  let wrapper;
  let linkEle;

  beforeEach(() => {
    wrapper = shallowMount(Link);
    linkEle = wrapper.vm.$el;
  });

  it('create', () => {
    expect(linkEle.classList).toContain('el-link');
    expect(linkEle.classList).toContain('is-underline');
  });

  it('type', () => {
    wrapper.setProps({
      type: 'success',
    });
    expect(linkEle.classList).toContain('el-link--success');
  });
});
