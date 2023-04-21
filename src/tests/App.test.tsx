import { describe, it, vi } from "vitest";
import { render, screen, act, fireEvent } from "@testing-library/react";
import App from "../App";
import Home from "../pages/Home";
import { setupServer } from "msw/node";
import { graphql } from "msw";
import usersService from "../services/usersService";

describe("App", () => {
  it("Renders Apps", async () => {
    act(() => {
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
    fireEvent.click(screen.getByRole("button", { name: "Hello" }));

    expect(screen.getByRole("button", { name: "Hello" })).toBeInTheDocument();
    expect(message2).toBeVisible();
  });

  it("Renders getAllUsers", async () => {
    const users = await usersService.getAllUsers(
      "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4LCJleHAiOjE2ODI0MzYzOTl9.oW1D-39uSB2BLMtJZQQhwyPWH8KgiTJHRhUY76incNo"
    );
    console.log(users);
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
});
