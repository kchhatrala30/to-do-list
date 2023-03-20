import React from "react";
import './Reminder.css';

function Reminder(props) {
    function deleteReminder() {
        props.delete(props.text);
    }

    return (
        <div className="rem">
            <li>
                {props.text}
            </li>
            <button onClick={deleteReminder}>Delete Reminder</button>
        </div>
    );
}

export default Reminder;