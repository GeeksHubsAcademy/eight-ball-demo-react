import React from "react";

import { shallow, mount } from "enzyme";
import Input from "./Input";

it("renders without crashing", () => {
  shallow(<Input />);
});

it("It has one input in a form", () => {
  const wrapper = shallow(<Input />);
  const form = wrapper.find("form");
  expect(form).toHaveLength(1);
  expect(form.find("input")).toHaveLength(1);
});

it("It shouldn't change", () => {
  const wrapper = shallow(<Input />);
  expect(wrapper).toMatchSnapshot();
});

it("should recieve a submit function", () => {
  const wrapper = mount(<Input submit={console.log} />);
  expect(typeof wrapper.prop("submit")).toBe("function");
});

it("should run the submit function onSubmit event", () => {
  const onSubmit = jest.fn();
  const value = "test text";
  const wrapper = mount(<Input submit={onSubmit} />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      preventDefault: () => {},
      target: { value }
    });
  wrapper
    .find("form")
    .at(0)
    .simulate("submit", { preventDefault: () => {} });
  expect(onSubmit).toHaveBeenCalled();
  expect(onSubmit).toBeCalledWith(value);
});
