import React from "react";
import { Input } from "./";

export default {
  title: "COMPONENTS API/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const InputDefault = Template.bind({});
InputDefault.args = {
  size: "extra-large",
  border: true,
  placeholder: "phone number",
};
