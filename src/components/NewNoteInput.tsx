import React, {useState, ChangeEvent} from 'react';

type NewNoteInputProps = {
    addNote (note: string): void; //return void
    removeNote (note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = (props) => {
    const [note, setNote] = useState<string>("");

    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value)
    }

    const addNoteClick = () => {
        props.addNote(note)
        setNote("")
    }

    const removeNoteClick = () => {
        props.removeNote(note)
    }

    return (
        <div>
            <input onChange={updateNote} value={note} type="text" name="note" />
            <button onClick={addNoteClick}>Add Note</button>
            <button onClick={removeNoteClick}>Remove Note</button>
        </div>
    )
}