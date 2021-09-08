import { Button, Container, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import SendIcon from "@material-ui/icons/Send";
import UserChatBubble from "./component/user/userChatBubble";
import OtherUserChatBubble from "./component/other/otherUserChatBubble";
import { styles } from "./styles";
import { UserMessage } from "./model/user";
import { PORT } from "../model/initialValue";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";

const ChatRoom: React.FC = () => {
  const classes = styles();
  const [message, setMessage] = React.useState<string>("");
  const [userMessage, setUserMessage] = React.useState<UserMessage[]>([]);
  const name = JSON.parse(localStorage.getItem("name")!);
  var socket: Socket<DefaultEventsMap, DefaultEventsMap> = io(PORT);

  React.useEffect(() => {
    // socket.on("connect", () => {
    //   console.log("you connect with id:" + socket.id);
    // });

    socket.on("receive", (data: UserMessage) => {
      setUserMessage((prev: UserMessage[]) => {
        return [...prev, data];
      });
    });
  }, []);

  const onSubmit = () => {
    const data: UserMessage = {
      name,
      message,
    };
    socket.emit("sent_message", data);
    setMessage("");
  };
  return (
    <React.Fragment>
      <Container className={classes.container}>
        <div className={classes.chatScreen}>
          {userMessage.map((data, index) => {
            return data.name === name ? (
              <UserChatBubble key={index} name={data.name} message={data.message} />
            ) : (
              <OtherUserChatBubble name={data.name} message={data.message} />
            );
          })}
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <TextField
            style={{ flex: 9, marginRight: "10px" }}
            label="Chat"
            variant="filled"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            style={{ flex: 1 }}
            variant="contained"
            color="secondary"
            endIcon={<SendIcon />}
            onClick={onSubmit}
          ></Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default ChatRoom;
