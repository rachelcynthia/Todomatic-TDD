import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { shallow } from 'enzyme';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('renders App successfully without crashing', () => {
  const app = shallow(<App />)
  expect(app.exists()).toEqual(true);
});
