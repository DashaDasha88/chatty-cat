import React from 'react';
import { ChatEngine } from "react-chat-engine";

import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

import "./App.css";

const projectID = "4e8efe3f-24e2-415f-a8e5-0a4b9eb74ff1"

const App = () => {

  if(!localStorage.getItem("username")) return <LoginForm />

  return (
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
  );
}

export default App;