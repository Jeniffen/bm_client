import React from "react";
import { FormPhoneAuth } from "./FormPhoneAuth";

export default {
  title: "COMPONENTS API/Forms",
};

const Template = (args) => <FormPhoneAuth {...args} />;

export const DropdownInput = Template.bind({});
DropdownInput.args = {
  size: "extra-large",
  dropdownType: "Country/Region",
  inputPlaceholder: "Phone number",
};
