import React from 'react'
import {shallow} from 'enzyme'
import {ObjInputs} from '../../components/TuxComponents/elements/Wizard/ObjectiveInputs/ObjectiveInputs.stories'


it('should render', () => {
  const wrapper = shallow(<ObjInputs />);
  console.log(wrapper.debug())
  expect(wrapper.find('.objective-inputs')).toHaveLength(1)
});