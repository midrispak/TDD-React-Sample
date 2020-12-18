import React from "react";
import { mount } from "enzyme";
import App from "./App";
const { formatPhoneNumber } = require("./util");

describe("Calculator Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("render the title of calcuator", () => {
    expect(wrapper.find("h1").text()).toContain("CalWise, A NextGen Calculator 🙃");
  });

  test("render a button with text of `Addition`", () => {
    expect(wrapper.find("#add-btn").text()).toBe("Addition");
  });

  test("render a button with text of `Subtraction`", () => {
    expect(wrapper.find("#sub-btn").text()).toBe("Subtraction");
  });

  test("render the initial value of result", () => {
    expect(wrapper.find("#result").text()).toBe("0");
  });

  test("render the click event of Addition", () => {
    wrapper.find("#first-num").simulate("change", { target: { value: "1" } });
    wrapper.find("#second-num").simulate("change", { target: { value: "2" } });

    wrapper.find("#add-btn").simulate("click");
    expect(wrapper.find("#result").text()).toBe("3");
  });

  test("render the click event of Subtraction", () => {
    wrapper.find("#first-num").simulate("change", { target: { value: "15" } });
    wrapper.find("#second-num").simulate("change", { target: { value: "7" } });

    wrapper.find("#sub-btn").simulate("click");
    expect(wrapper.find("#result").text()).toBe("8");
  });

  test("Render the title of Division Button", () => {
    expect(wrapper.find("#div-btn").text()).toBe("Division");
  });

  test("render the click event of Division", () => {
    wrapper.find("#first-num").simulate("change", { target: { value: "30" } });
    wrapper.find("#second-num").simulate("change", { target: { value: "10" } });

    wrapper.find("#div-btn").simulate("click");
    expect(wrapper.find("#result").text()).toBe("3");
  });




});

describe("Utilities Testing", () => {
  test("Phone formatter With Country code", () => {
    let x = formatPhoneNumber("12342342345");
    expect(x).toBe("+1 (234) 234-2345");
  });
  test("Phone formatter Without Country code", () => {
    let x = formatPhoneNumber("2342342345");
    expect(x).toBe("(234) 234-2345");
  });

  test ("invalid phone format", () => {
    let x = formatPhoneNumber("234");
    expect(x).toBe(null);
  });

});
