import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

describe("Example", () => {
  it("should render", () => {
    render(<div>Hello world</div>);
    expect(screen.getByText("Hello world")).toBeDefined();
  });
});
