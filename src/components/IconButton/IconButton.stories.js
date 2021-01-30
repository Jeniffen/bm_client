import React from "react";
import { IconButton } from "./";
import { Icons } from "../Icons";

export default {
  title: "COMPONENTS API/IconButton",
  component: IconButton,
};

const Template = (args) => <IconButton {...args} />;

export const Close = Template.bind({});
Close.args = {
  size: "x-small",
  iconType: "close",
};
