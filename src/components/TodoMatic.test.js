import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { shallow } from 'enzyme';
import TodoMatic from './TodoMatic';
import { fireEvent, render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

Enzyme.configure({ adapter: new Adapter() });

describe("Basic rendering of TodoMatic", () => {

    it("Should render TodoMatic successfully", () => {
        const todoMatic = shallow(<TodoMatic />);
        expect(todoMatic.exists()).toEqual(true);
    })

    it("Should have heading as TodoMatic", () => {
        const {getByText} = render(<TodoMatic />)
        expect(getByText("TodoMatic"));
    })

    it("Should have one input box which is empty initially", () => {
        const todoMatic = render(<TodoMatic />);
        expect(todoMatic.getByTestId("todo-input")).toHaveTextContent("");
    })
    
    it("Should have one Add Todo button", () => {
        const {getByText} = render(<TodoMatic />)
        expect(getByText("Add Todo")); 
    })

})

describe("Testing functionality of TodoMatic", () => {

    it("Should not be able to add todo when the input box is empty", () => {
        const {getByTestId, getByText} = render(<TodoMatic />);
        userEvent.type(getByTestId("todo-input"), "");
        expect(getByText("Add Todo")).toBeDisabled();
    })

    it("Should add the new todo to the todo list displayed when typed in the input box and submitted the form", () => {
        const {getByTestId} = render(<TodoMatic />)
        const todoInput = getByTestId("todo-input")
        const todoForm = getByTestId("todo-form")
        const todoList = getByTestId("todo-list")

        fireEvent.change(todoInput, { target: { value: "Eat pizza" } });
        fireEvent.submit(todoForm);

        expect(within(todoList).getByText("Eat pizza")).toBeDefined();
        expect(todoInput).toHaveValue("");
    })

    it("Should display a delete button with new todo added", () => {
        const {getByTestId} = render(<TodoMatic />)
        const todoInput = getByTestId("todo-input");
        const todoForm = getByTestId("todo-form");
        const todoList = getByTestId("todo-list");

        fireEvent.change(todoInput, {target : {value : "Eat pizza"}});
        fireEvent.submit(todoForm);

        expect(within(todoList).getByText("Delete")).toBeDefined();
    })

    it("Should display a checkbox with new todo added", () => {
        const {getByTestId} = render(<TodoMatic />)
        const todoInput = getByTestId("todo-input");
        const todoForm = getByTestId("todo-form");
        const todoList = getByTestId("todo-list");

        fireEvent.change(todoInput, {target : {value : "Eat pizza"}});
        fireEvent.submit(todoForm);

        expect(within(todoList).getByRole("checkbox")).toBeDefined();
    })


    it("Should remove the todo item when delete button is clicked", () => {
        const {getByTestId} = render(<TodoMatic />)
        const todoInput = getByTestId("todo-input");
        const todoForm = getByTestId("todo-form");

        fireEvent.change(todoInput, {target : {value : "Eat pizza"}});
        fireEvent.submit(todoForm);

        const todoList = getByTestId("todo-list")

        const deleteButton = within(todoList).getByText("Delete")
        fireEvent.click(deleteButton);

        expect(within(todoList).queryByText("Eat pizza")).toBeNull();
    })




})