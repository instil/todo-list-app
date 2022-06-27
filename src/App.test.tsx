import App from "./App";
import {render, screen} from "@testing-library/react";

it("renders the app's header", () => {
  render(<App />);

  const headerElement = screen.getByText("To-do List App");

  expect(headerElement).toBeInTheDocument();
});