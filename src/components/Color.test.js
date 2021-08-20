import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const testColor = { 
    name: '',
    color: 'fakeColor',
    code: {
        hex:''
    }
}

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={testColor} />)
});
  
test("Renders the color passed into component", () => {
    render(<Color color={testColor}/>)

    const renderedColor = screen.getByText(/fakecolor/i);

    expect(renderedColor).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {

});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    
});