import { describe, expect, it } from "vitest";
import { getString } from "..";

describe("index", () => {
  it("should work", () => {
    expect(getString()).toBe("hello world");
  });
});
