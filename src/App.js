import React, { useState, useEffect } from "react";
import Message from "./Message";

import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import db from './firebase'
import "./App.css";
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([

  ]
  );
  const [username, setUsername] = useState("");

useEffect(() => {
db.collection('message')
.orderBy('timestamp', 'desc')
.onSnapshot(snapshot => {
setMessages(snapshot.docs.map(doc => ({id:doc.id, message: doc.data()})))
})
},[])
  useEffect(() => {
    setUsername(prompt("Please Enter your name Else your name won't be shown"));
  }, []);

  const sendmessage = (event) => {
    event.preventDefault();

    db.collection('message').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setMessages([...messages, { username: username, text: input }]);

    setInput("");
  };

  

  return (
    <div className="App">
      
      <h1>Messenger clone</h1>
      <h2>welcome {username}</h2>
      <form className='app__form'>
        <FormControl className='app__formControl'>
       {/*   <InputLabel>Enter a message...</InputLabel>*/}
          <Input
          className='app__Input'
          placeholder="Enter a message"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton 
          className='app__IconButton'
           disabled={!input}
           variant="contained"
           color="primary"
           type="submit"
           onClick={sendmessage}
          >
<SendIcon/>
          </IconButton>
        </FormControl>
        
        {/* <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendmessage}
        >
          send message
        </Button> */}
      </form>
      <FlipMove>
      {messages.map(({id, message}) => {
        return <Message key={id} username={username} message={message} />;
      })}
      </FlipMove>
    
      
    </div>
  );
}

export default App;
