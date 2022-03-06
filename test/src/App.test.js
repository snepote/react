import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on existing
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Renders without a name', () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.textContent).toBe("Hello, stranger!");
});

it('Renders with a name', () => {
  act(() => {
    render(<App name="Sebastian"/>, container);
  });

  expect(container.textContent).toBe("Hello Sebastian!");
});
