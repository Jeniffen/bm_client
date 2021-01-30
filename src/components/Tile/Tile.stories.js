import React from "react";
import { Tile } from "./";

export default {
  title: "COMPONENTS API/Tile",
};

const Template = (args) => <Tile {...args} />;

export const TileDefault = Template.bind({});
TileDefault.args = {
  imageURL:
    "https://s3-us-west-2.amazonaws.com/shaadiwishnewbucket/9ff1272d-8d93-4db9-8c39-04de37a44731.jpg",
  title: "From mehndi to gurudwara",
  tileSize: "medium",
  tileType: "rectangle",
};
