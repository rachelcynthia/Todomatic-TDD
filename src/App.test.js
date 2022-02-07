import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { shallow } from 'enzyme';
import App from './App';
import { addTask } from './App';
import { render } from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() });

//App.addTask("pallavi")

it("Should render App component without crashing", () => {
  const app = shallow(<App />);
  expect(app.exists()).toEqual(true);
})

it("Should have title of Todo app as TodoMatic", () => {
    const app = render(<App />);
    expect(app.getByTestId("app-heading")).toHaveTextContent("TodoMatic")
})

it("New test", () => {
  expect(addTask("Pallavi"))
})