import { describe, it } from "vitest";
import { render, screen, act } from "@testing-library/react";
import App from "./App";
import { setupServer } from "msw/node";
import { graphql } from "msw";

describe("App", () => {
  it("Renders hello world", async () => {
    act(() => {
      render(<App />);
    });
    const message = await screen.findByText(/Cool Dashboard/i);
    const message2 = await screen.findByText(/Mariam/i);

    expect(message).toBeVisible();
    expect(message2).toBeVisible();
  });
});
