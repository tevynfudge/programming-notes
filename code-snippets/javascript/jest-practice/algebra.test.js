const { test, expect } = require("@jest/globals");
const { describe } = require("yargs");

test("Adds two numbers together", () => {
    expect(add(45, 55)).toBe(100);
})