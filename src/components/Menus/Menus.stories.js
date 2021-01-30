import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Menu } from "./Menu";

export default {
  title: "COMPONENTS API/Menu",
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "modal",
      values: [{ name: "modal", value: "#C6C6C6" }],
    },
  },
};

const items = [
  { key: "SIGN_UP", weight: "bold", text: "Sign up", divider: false },
  { key: "LOG_IN", weight: "light", text: "Log in", divider: true },
  {
    key: "OFFER_SERVICE",
    weight: "light",
    text: "Offer a service",
    divider: false,
  },
  { key: "HELP", weight: "light", text: "Help", divider: false },
];

const Template = (args) => <Menu {...args} />;

export const MenuDefault = Template.bind({});
MenuDefault.args = {
  items: items,
};
