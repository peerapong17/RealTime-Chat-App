import React from "react";
import { styles } from "./styles";

const UserChatBubble: React.FC<{ name: string; message: string }> = ({
  message,
  name,
}) => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <div className={classes.name}>{name}</div>
      <div className={classes.message}>{message}</div>
    </div>
  );
};

export default UserChatBubble;
