import React from "react";
import { Avatar } from "./";

export default {
  title: "COMPONENTS API/Avatar",
};

const Template = (args) => <Avatar {...args} />;

export const AvatarDefault = Template.bind({});
AvatarDefault.args = {
  size: "small",
  imageURL: "avatar",
  username: "avatar-name",
};
