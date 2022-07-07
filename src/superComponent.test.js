import { render, screen } from "@testing-library/react";
import SuperComponent from "./superComponent";

test("renders learn react link", () => {
  render(<SuperComponent />);
  const linkElement = screen.getByText(/Mon super composant/i);
  expect(linkElement).toBeInTheDocument();
});
