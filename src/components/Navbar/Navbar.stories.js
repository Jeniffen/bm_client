import React from "react";
import { Navbar } from "./";

export default {
  title: "COMPONENTS API/Navbar",
  parameters: {
    backgrounds: {
      default: "modal",
      values: [{ name: "modal", value: "#C6C6C6" }],
    },
  },
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  nameHomepage: "Template Hompage",
};
