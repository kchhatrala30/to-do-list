import React from "react";
import Reminder from "./Reminder";
import './ReminderList.css';

function ReminderList(props) {
    function handleDelete(text) {
        props.setReminders(props.reminders.filter(reminder => reminder !== text));
    }

    return (
        <ul>
            {props.reminders.map((text, index) => (
                <Reminder text={text} index={index} delete={handleDelete} />
            ))}
        </ul>
    );
}

export default ReminderList;