import React from "react";
import { Dropdown } from "./";

export default {
  title: "COMPONENTS API/Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const DropdownDefault = Template.bind({});
DropdownDefault.args = {
  size: "extra-large",
  border: true,
  type: "Country/Region",
};
