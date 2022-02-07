import React from 'react';
import TodoForm from './TodoForm'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { shallow } from 'enzyme';
import { fireEvent, getByTestId, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const addTask = jest.fn().mockImplementation((name) => {})

Enzyme.configure({ adapter: new Adapter() });

describe("Basic rendering of TodoForm", () => {
    it("Should render TodoForm without crashing", () => {
        const todoForm = shallow(<TodoForm />);
        expect(todoForm.exists()).toEqual(true);
    })

    it("Should be able to type in new Todo task",  () => {
        const todoForm = render(<TodoForm />);
        expect(todoForm.getByTestId("new-todo")).not.toHaveAttribute("disabled");
    })

    it("Should be able to submit new todo", () => {
        const {getByTestId} = render(<TodoForm />);
        expect(getByTestId("submit-todo")).not.toHaveAttribute("disabled");
    })
})
describe("Testing functionality of TodoForm", () => {

    it("Should handle display of todo item after typing task and clicking on Add button", ()=>{
        const {getByTestId} = render(<TodoForm addTask={addTask}/>)
        userEvent.type(getByTestId("new-todo"), "Write a code");
        fireEvent.click(getByTestId("submit-todo"))
        expect(addTask).toHaveBeenCalledWith("Write a code")
        
    })
})
