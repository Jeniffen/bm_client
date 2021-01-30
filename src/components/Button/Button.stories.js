import React from "react";
import { Button } from "./";
import { Icons } from "../Icons";

export default {
  title: "COMPONENTS API/Button",
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "primary button",
  size: "extra-large",
};

export const SecondaryIcon = Template.bind({});
SecondaryIcon.args = {
  type: "secondary",
  size: "extra-large",
  label: "secondary with icon",
  prefixIcon: <Icons type="logo-google" size="small" />,
};

export const DearkDefault = Template.bind({});
DearkDefault.args = {
  type: "dark",
  size: "small",
  label: "dark themed",
};

export const LightDefault = Template.bind({});
LightDefault.args = {
  type: "light",
  size: "small",
  label: "light themed",
};
