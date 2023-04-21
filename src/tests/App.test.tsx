import { describe, it, vi } from "vitest";
import { render, screen, act, fireEvent } from "@testing-library/react";
import App from "../App";
import Home from "../pages/Home";
import usersService from "../services/usersService";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("Renders Apps", async () => {
    act(() => {
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: vi.fn().mockImplementation((query) => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        })),
      });
      render(<App />);
    });
    const message = await screen.findByText(/Cool Dashboard/i);

    expect(message).toBeVisible();
  });

  it("Renders Home", async () => {
    act(() => {
      render(<Home />);
    });
    const message2 = await screen.findByText(/Mariam/i);

    const button = screen.getByRole("button", { name: "Hello" });
    userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Hello" })).toBeInTheDocument();
    expect(message2).toBeVisible();
  });

  it("Renders getAllUsers", async () => {
    const users = await usersService.getAllUsers(
      import.meta.env.VITE_TOKEN_TEST as string
    );

    // expect(users).toMatchInlineSnapshot()
    expect(users).toEqual({
      users: [
        {
          __typename: "User",
          id: "1",
          name: "Carlota Douglas",
        },
        {
          __typename: "User",
          id: "2",
          name: "Gregory Hauck",
        },
        {
          __typename: "User",
          id: "3",
          name: "Ron Kertzmann",
        },
        {
          __typename: "User",
          id: "4",
          name: "Angelia Collins",
        },
        {
          __typename: "User",
          id: "5",
          name: "Kelly Jerde",
        },
        {
          __typename: "User",
          id: "6",
          name: "ABC DEF",
        },
        {
          __typename: "User",
          id: "7",
          name: "alex",
        },
        {
          __typename: "User",
          id: "8",
          name: "Viet",
        },
        {
          __typename: "User",
          id: "9",
          name: "Mariam",
        },
      ],
    });

    // expect(users).toBeDefined();
  });

  it("Test function", async () => {
    const getApples = vi.fn(() => 0);
    getApples();

    expect(getApples).toHaveBeenCalled();
    expect(getApples).toHaveReturnedWith(0);

    getApples.mockReturnValueOnce(5);

    const res = getApples();
    expect(res).toBe(5);
    expect(getApples).toHaveNthReturnedWith(2, 5);
  });
});
