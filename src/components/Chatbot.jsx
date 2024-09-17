import React, { useState } from "react";
import chat from '../Images/ct4.png'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'react-toastify/dist/ReactToastify.css';



const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    const userMessage = input.trim();
    if (userMessage) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", text: userMessage },
      ]);
      getAssistantResponse(userMessage);
      setInput("");
    }
  };

  const getAssistantResponse = (message) => {
    // Simple response logic
    let response = "";

// Convert the input message to lowercase
const lowerCaseMessage = message.toLowerCase();

// Example logic to respond based on specific sentences or phrases
if (lowerCaseMessage.includes("hello")) {
    response = "I'm a friendly assistant, nice to meet you!";
} else if (lowerCaseMessage.includes("Please help me to login")) {
    response = "sure please go to the sigup page in the navbar ,then first create a user account then signup";
} else if (lowerCaseMessage.includes("how many days it will take to resolve our issues")) {
    response = "It may vary according to the scenerio,normally it is 7 days";
} else if (lowerCaseMessage.includes("is there any fees")) {
    response = "No its completly free of service!";
} else {
    response = "Sorry, I didn't quite catch that. Could you please rephrase?";
}
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "assistant", text: response },
    ]);
  };

  return (
    
    <div>
       
         <img className='mt-5 ms-5 chatbox' src={chat} onClick={handleShow} style={{height:'100px'}} />
           
         <Modal show={show} onHide={handleClose}size='lg'>
         <div style={styles.container} >
         <div style={styles.chatBox} show={show} onHide={handleClose}>
           {messages.map((message, index) => (
             <div
               key={index}
               style={{
                 ...styles.message,
                 alignSelf: message.type === "user" ? "flex-end" : "flex-start",
                 backgroundColor:
                   message.type === "user" ? "#DCF8C6" : "#ECECEC",
               }}
             >
               {message.text}
             </div>
           ))}
         </div>
         <div style={styles.inputBox}>
           <input
             type="text"
             value={input}
             onChange={handleInput}
             style={styles.input}
             placeholder="Type a message..."
           />
           <button onClick={handleSend} style={styles.sendButton}>
             Send
           </button>
         </div>
       </div>
      </Modal>
       

    </div>
  );
};

// Simple inline styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  chatBox: {
    width: "400px",
    height: "500px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },
  message: {
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    maxWidth: "80%",
  },
  inputBox: {
    display: "flex",
    marginTop: "20px",
  },
  input: {
    flexGrow: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  sendButton: {
    marginLeft: "10px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Chatbot;