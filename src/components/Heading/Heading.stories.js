import React from "react";
import { Heading } from "./";

export default {
  title: "COMPONENTS API/Heading",
};

const Template = (args) => <Heading {...args} />;

export const HeadingDefault = Template.bind({});
HeadingDefault.args = {
  mainTitle: "This is a Header",
  subTitle: "this is a Sub-Header",
  textAlign: "left",
};
