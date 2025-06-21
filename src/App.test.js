import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

test("renders Navbar with correct links", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const homeLink = screen.getByText(/Home/i);
  const aboutLink = screen.getByText(/About/i);

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});
