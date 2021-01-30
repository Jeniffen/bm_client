import React from "react";
import PropTypes from "prop-types";
import Style from "./styles";
import { Icons } from "../Icons";

const Avatar = ({ size, username, imageURL, onClick }) => {
  return (
    <Style.Avatar size={size} onClick={onClick}>
      <Icons type={imageURL} alt={username} />
    </Style.Avatar>
  );
};

Avatar.propTypes = {
  /**
   * Size of avatar
   */
  size: PropTypes.oneOf(["tiny", "small", "medium"]),
  /**
   * Name of user
   */
  username: PropTypes.string,
  /**
   * URL to image or icon-type
   */
  imageURL: PropTypes.string.isRequired,
  /**
   * Action that is executed on onClick event
   */
  onClick: PropTypes.func,
};

export default Avatar;
