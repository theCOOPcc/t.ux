import { shallow } from 'enzyme';
import { TextSizeBoxes } from '../../components/TuxComponents/elements/TextSizeBoxes/TextSizeBoxes.stories.js';

const wrapper = shallow(<TextSizeBoxes />)
it('should render', () => {
  expect(wrapper.find('.test-class')).toHaveLength(1) 
})