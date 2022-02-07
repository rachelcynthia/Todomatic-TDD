import React from 'react';
import Todo from './Todo';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() });

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
})