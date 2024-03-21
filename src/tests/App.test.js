import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("renders login and signup buttons", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const loginButton = screen.getByText(/login/i);
  const signupButton = screen.getByText(/sign up/i);

  expect(loginButton).toBeInTheDocument();
  expect(signupButton).toBeInTheDocument();
});