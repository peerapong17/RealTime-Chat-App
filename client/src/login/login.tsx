import React from "react";
import { styles } from "./styles";
import { useHistory } from "react-router-dom";
import { Button, Container, TextField } from "@material-ui/core";

const Login: React.FC = () => {
  const classes = styles();
  const history = useHistory();
  const [name, setName] = React.useState<string>("");

  const onClick = () => {
    localStorage.setItem("name", JSON.stringify(name));
    history.push("/chat-room");
  };

  return (
    <React.Fragment>
      <Container className={classes.container}>
        <div className={classes.box}>
          <TextField
            onChange={(e) => setName(e.target.value)}
            name="name"
            color="secondary"
            label="name"
            variant="filled"
          />
          <Button
            onClick={onClick}
            color="secondary"
            type="submit"
            variant="contained"
          >
            OK
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Login;
