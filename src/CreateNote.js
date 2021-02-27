import React, {useState} from 'react'
import './CreateNote.css';

function CreateNote(props) {
	const [expand, setExpand] = useState(false);
	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	const inputEvent = (event) => {

		const { name, value } = event.target;
		setNote((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	};

	const addEvent = () => {
		props.passNote(note);
		setNote({
			title: "",
			content: "",
		});
	};

	const expandIt = () => {
		setExpand(true);
	}

	const backNormal = () => {
		setExpand(false);
	}
	return (
		<div className="createNote" onDoubleClick={backNormal}>
			<form>
			{expand?
				<input 
					name="title"
					type="text" 
					value={note.title} 
					onChange={inputEvent} 
					placeholder="Title" 
					autoComplete="off" 
				/> : null}
				<textarea 
					name="content"
					rows="3" 
					column="" 
					value={note.content} 
					onChange={inputEvent} 
					placeholder="Write a Note..."
					onClick={expandIt}
				></textarea>
				{expand?
				<button onClick={addEvent}>+</button>
				: null}
			</form>
		</div>
	)
}

export default CreateNote