import React from "react";
import { HomePage } from "./";

export default {
  title: "COMPONENTS API/HomePage",
  parameters: {
    backgrounds: {
      default: "modal",
      values: [{ name: "modal", value: "#C6C6C6" }],
    },
  },
};

const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
