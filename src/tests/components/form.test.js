import React from 'react';
import { shallow } from 'enzyme';
import  { Form, renderAlternatives as RenderAlternatives}  from '../../components/Form';

const handleSubmit = jest.fn();
test('Should render Form component', () => {
  const wrapper = shallow(<Form handleSubmit={handleSubmit}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Submit button calls handleSubmit', () => {
  const wrapper = shallow(<Form handleSubmit={handleSubmit}/>);
  wrapper.find('form').simulate('submit');
  expect(handleSubmit).toHaveBeenCalled();
});

const fields = [];
const meta = {error:'error'};
test('Should render renderAlternatives component', () => {
  const wrapper = shallow(<RenderAlternatives fields={fields} meta={meta}/>);
  expect(wrapper).toMatchSnapshot();
});
