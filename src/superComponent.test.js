import { render, screen, fireEvent } from "@testing-library/react";
import SuperComponent from "./superComponent";

test("Test1", () => {
  render(<SuperComponent />);
  const linkElement = screen.getByText(/Mon super composant/i);
  expect(linkElement).toBeInTheDocument();
});

test("Test2", () => {
  const messageAtester = "Salut c est Greg";

  render(<SuperComponent>{messageAtester}</SuperComponent>);
  expect(screen.queryByText(messageAtester)).toBeNull();

  //SIMULATION D'UN CLICK
  fireEvent.click(screen.getByText(/Mon super composant/i));
  expect(screen.getByText(messageAtester)).toBeInTheDocument();
});
