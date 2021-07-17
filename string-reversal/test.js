// const reverse = require("./sol_one")
// const reverse = require("./sol_two")
const reverse = require("./sol_three")

test("Reverse function exists", () => {
  expect(reverse).toBeDefined()
})

test("Reverse reverses a string", () => {
  expect(reverse("apple")).toEqual("elppa")
})

test("Reverse reverses a string", () => {
  expect(reverse("  Hello!")).toEqual("!olleH  ")
})
