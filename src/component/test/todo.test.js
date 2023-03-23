import { render, screen } from "@testing-library/react";
import Todo from "../todo"
import '@testing-library/jest-dom'

test("simple test", ()=>{
    expect(true).toBe(true)
})


test("test for todo element", ()=>{
    render(<Todo/>);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
})