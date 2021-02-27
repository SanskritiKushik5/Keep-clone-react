import React from 'react';
import "./Note.css";

function Note(props) {
	const deleteNote = () => {
		props.deleteItem(props.id);
	};
	return (
		<div className="note">
			<h2>{props.title}</h2>
			<br />
			<p>{props.content}</p>
			<button onClick={deleteNote}>-</button>
		</div>
	)
}

export default Note