import React from "react";

function Reminder(props) {
    function deleteReminder() {
        props.delete(props.text);
    }

    return (
        <div>
            <li>
                {props.text}
            </li>
            <button onClick={deleteReminder}>Delete Reminder</button>
        </div>
    );
}

export default Reminder;