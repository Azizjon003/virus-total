import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders link checker app", () => {
  render(<App />);
  const titleElement = screen.getByText(/Link Check/i);
  expect(titleElement).toBeInTheDocument();
});
