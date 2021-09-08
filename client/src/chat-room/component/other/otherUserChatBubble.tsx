import React from "react";
import { styles } from "./styles";


const OtherUserChatBubble: React.FC<{ name: string; message: string }> = ({
  name,
  message,
}) => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <div className={classes.name}>{name}</div>
      <div className={classes.message}>{message}</div>
    </div>
  );
};

export default OtherUserChatBubble;
