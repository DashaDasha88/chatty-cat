import React from 'react';
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";

import "./App.css";

const App = () => {

  return (
      <ChatEngine
        height="100vh"
        projectID="4e8efe3f-24e2-415f-a8e5-0a4b9eb74ff1"
        userName="ChatCat"
        userSecret="123123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

      />
  );
}

export default App;