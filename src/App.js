import './App.css';
import React, { useState } from "react";
import ReminderList from './components/ReminderList';

function App() {
  const [text, setText] = useState("");
  const [reminders, setReminders] = useState([]);

  function textHandler(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setReminders([...reminders, text]);
    setText("");
  }

  return (
    <div className="App">
        <h2>To-Do List</h2>

        <form>
          <input type="text" onChange={textHandler} id="todo-text"></input>
          <button onClick={handleSubmit}>Submit</button>
        </form>
        <div>
            <ReminderList reminders={reminders} setReminders={setReminders} />
        </div>
    </div>
  );
}

export default App;
