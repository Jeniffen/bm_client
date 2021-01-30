import React from "react";
import { Datepicker } from "./";

export default {
  title: "COMPONENTS API/Datepicker",
};

const Template = (args) => <Datepicker {...args} />;

export const DatepickerDefault = Template.bind({});
DatepickerDefault.args = {
  stateParent: { from: null, to: null },
};
