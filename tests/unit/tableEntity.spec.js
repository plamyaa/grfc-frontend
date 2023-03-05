import { mount } from '@vue/test-utils';
import tableEntity from '../../src/entities/table/tableEntity.vue';

describe('tableEnitity tests', () => {
  it('renders navigation component', () => {
    const wrapper = mount(tableEntity);
    expect(wrapper.findComponent({ name: 'TableNavigation' }).exists()).toBe(true);
  });
});
