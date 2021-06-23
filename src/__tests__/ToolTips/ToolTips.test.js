import { shallow } from 'enzyme';
import { ToolTips } from '../../components/TuxComponents/elements/ToolTips/ToolTips.stories.js';

const wrapper = shallow(<ToolTips />)
it('should render', () => {
  expect(wrapper.find('.test-class')).toHaveLength(1) 
})
it('should have text', () => {
  const text = wrapper.find('.test-class').text()
  expect(text).toBe('This is a tooltip')
})