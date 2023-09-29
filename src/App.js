import { useState } from "react";
import "./App.css";
import Input from "./Input";
import Image from "./Image";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const [messagesUserTwo, setMessagesUserTwo] = useState([]);
  const [inputUserTwo, setInputUserTwo] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onInputChangeUserTwo = (e) => {
    setInputUserTwo(e.target.value);
  };
  const onSend = () => {
    if (input !== "") {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  const onSendUserTwo = () => {
    if (inputUserTwo !== "") {
      setMessagesUserTwo([...messagesUserTwo, inputUserTwo]);
      setInputUserTwo("");
    }
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="left-box"></div>
      <div className="rigth-box">
        <div>
          {messages.map((el) => (
            <div className="userOneMessages">
              <div className="userOneImg"></div>
              <p>{el}</p>
            </div>
          ))}
          {messagesUserTwo.map((el) => (
            <div className="userTwoMessages">
              <p>{el}</p>
              <div className="userTwoImg"></div>
            </div>
          ))}
        </div>
        <div className="inputDiv">
          <h3>User 1</h3>
          <form onSubmit={submit} className="userOne">
            <Input onChange={onInputChange} value={input} />
            <Image onClick={onSend} />
          </form>
          <h3>User 2</h3>
          <form onSubmit={submit} className="userOne">
            <Input onChange={onInputChangeUserTwo} value={inputUserTwo} />
            <Image onClick={onSendUserTwo} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
