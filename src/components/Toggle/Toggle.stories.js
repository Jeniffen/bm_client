import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toggle } from "./";
import { Menu } from "../Menus/Menu";
import { Avatar } from "../Avatar";

export default {
  title: "COMPONENTS API/Toggle",
  decorators: [
    (Story) => (
      <Router>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Story />
        </div>
      </Router>
    ),
  ],
};

const items = [
  { key: "1", weight: "bold", text: "Sign up", divider: false },
  { key: "2", weight: "light", text: "Log in", divider: true },
  { key: "3", weight: "light", text: "Offer a service", divider: false },
  { key: "4", weight: "light", text: "Help", divider: false },
];

export const ToggleDefault = () => (
  <Toggle toggleElement={<Menu items={items} />}>
    <Avatar size="small" imageURL="avatar" username="avatar-name" />
  </Toggle>
);
