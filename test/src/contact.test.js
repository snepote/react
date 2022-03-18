import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Contact from "./contact";
import MockedMap from "./map";

jest.mock("./map", () => {
  return function DummyMap(props) {
    return(
      <div data-testid="map">
        {props.center.lat}:{props.center.long}
      </div>
    );
  };
});

let container = null;
beforeEach(() => {
  // setup DOM element as render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render contact information", () => {
  const center = { lat: 0, long:0 };
  act(() => {
    render(
      <Contact
        name="John"
        email="john@example.com"
        site="https://example.com"
        center={center}
      />,
      container
    );
  });

  expect(
    container.querySelector("[data-testid='email']").getAttribute("href")
  ).toEqual("mailto: john@example.com");

  expect(
    container.querySelector("[data-testid='site']").getAttribute("href")
  ).toEqual("https://example.com");

  expect(
    container.querySelector("[data-testid='map']").textContent).toEqual("0:0");

});
