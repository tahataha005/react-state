// src/test/main.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component", () => {
  it('renders the "Hello World" message', () => {
    render(<App />);
    const helloWorldMessage = screen.getByText("Hello World");
    expect(helloWorldMessage).toBeInTheDocument();
  });
});
