import React from 'react';
import Todo from './Todo';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { shallow } from 'enzyme';
import { fireEvent, render } from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() });
let completedProps = {
    id:1, 
    title:"todo", 
    completed : true,
    deleteTask :jest.fn()
}

let notCompletedProps = {
    id:1, 
    title:"todo", 
    completed : false
}
describe("Basic Rendering of Todo", () =>{
    it("Should render Todo component successfully", () => {
        const todo = shallow(<Todo />);
        expect(todo.exists()).toEqual(true);
    })

    it("Should be able to delete Todo", () => {
        const todo = render(<Todo />);
        expect(todo.getByTestId("delete-todo")).not.toHaveAttribute("disabled");
    })

    it("Should be able to check or uncheck Todo to toggle task completion", () =>{
        const { getByTestId }= render(<Todo />)
        expect(getByTestId("checkbox")).not.toHaveAttribute("disabled")
    })

    it("Should have checkbox which must be checked when it is completed", () => {
        const todo = render(<Todo {...completedProps}/>);
        expect(todo.getByTestId("checkbox")).toBeChecked()
    })

    it("Should have checkbox which must not be checked when not completed", () => {
        const todo = render(<Todo {...notCompletedProps}/>);
        expect(todo.getByTestId("checkbox")).not.toBeChecked()
    })

    it("Should have label which must contain the correct label", () =>{
        const todo = render(<Todo {...completedProps}/>);
        expect(todo.getByTestId("todo-label").textContent).toBe(" todo ")
    })

    it("Should call delete task when button is clicked", ()=> {
        const todo = render(<Todo {...completedProps}/>);
        fireEvent.click(todo.getByTestId("delete-todo"))
        expect(completedProps.deleteTask).toHaveBeenCalledTimes(1)
    })
})