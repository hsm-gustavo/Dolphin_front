import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import Login from "../routes/Login";

describe("Login component", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByTestId("login-button")).toBeInTheDocument();
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
  });

  it("disables login button when disabled is true", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId("login-button"));
    expect(screen.getByTestId("login-button")).toBeDisabled();
  });
  /*
  it("enables login button when form inputs are valid", async () => {
    render(<Login />);
    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    await waitFor(() => {
      expect(screen.getByTestId("login-button")).toBeEnabled();
    });
  });

  it("performs login successfully", async () => {
    render(<Login />);
    const mockResponse = {
      command: true,
      username: "testuser",
      name: "Test User"
    };
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse)
    });

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(screen.getByTestId("login-button"));

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith("name", "Test User");
      expect(localStorage.setItem).toHaveBeenCalledWith("username", "testuser");
      expect(screen.getByText("Login successful")).toBeInTheDocument();
    });
  });

  it("handles login failure", async () => {
    render(<Login />);
    const mockResponse = { command: false };
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse)
    });

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(screen.getByTestId("login-button"));

    await waitFor(() => {
      expect(screen.getByText("Login failed")).toBeInTheDocument();
    });
  }); */
});
