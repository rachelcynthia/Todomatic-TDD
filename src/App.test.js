import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { shallow } from 'enzyme';
import App from './App';
import { fireEvent, render } from '@testing-library/react';

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

it("Should be able to add task", () => {
  const app = render(<App />);
  fireEvent.change(app.getByTestId("new-todo"),{
    target : {value: "new task"}
  })
  fireEvent.click(app.getByTestId("submit-todo"))
  expect(app.getByTestId("todo-label").textContent).toBe(" new task ")

})

it("Should be able to delete task", () => {
  const app = render(<App />);
  fireEvent.change(app.getByTestId("new-todo"),{
    target : {value: "new task"}
  })
  fireEvent.click(app.getByTestId("submit-todo"))
  expect(app.getByTestId("todo-label").textContent).toBe(" new task ")

  fireEvent.click(app.getByTestId("delete-todo"))
  const newTodo = app.queryByText("new task")
  expect(newTodo).toBeNull()
})

