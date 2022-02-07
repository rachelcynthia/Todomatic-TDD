import React from 'react';
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { shallow } from 'enzyme';
import TodoList from './TodoList';
import { render , screen, fireEvent, getByTestId, within} from '@testing-library/react';
import mockData from '../../mockData';

const deleteTask = jest.fn().mockImplementation((id) => {})

Enzyme.configure({ adapter: new Adapter() });

describe("Basic rendering of TodoList", () => {
    it ("Should return TodoList without crashing", () => {
        const todoList = shallow(<TodoList />);
        expect(todoList.exists()).toEqual(true);
    })
})

describe("Testing functionality of TodoList", () => {
    it ("Should display titles of all todos", () => {
        render(<TodoList todos = {mockData}/>);
        mockData.forEach((todo) => {
            expect(screen.getByText(todo.title)).toBeInTheDocument()
        });
    });
    
    
    it("Should call deleteTask function on clicking delete button", () => {
        
        const {getByTestId} = render(<TodoList todos = {[mockData[0]]} deleteTask = {deleteTask}/>)
        fireEvent.click(getByTestId("delete-todo"))
        expect(deleteTask).toHaveBeenCalledWith("todo-1");

    })

    it("Should be able to toggle task completion of a Todo", () => {

        const {getByTestId} = render(<TodoList todos = {[{id : "todo-6", title: "Code", completed: false}]}/>)
        fireEvent.click(getByTestId("checkbox"))
        expect(getByTestId("checkbox")).toBeChecked();

    })
    
    
    
});