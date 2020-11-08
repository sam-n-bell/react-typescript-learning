import {ADD_NOTE, REMOVE_NOTE} from '../actions/notes'

export type NotesState = {
    notes: string[]
}

const initialState = {
    notes: []
}

type Action = {
    type: string,
    payload: any
}

export const notesReducer = (state: NotesState = initialState, action: Action) => {
    console.log(action);
    switch(action.type) {
        case ADD_NOTE: {
            return { ...state, notes: [...state.notes, action.payload]}
        }
        case REMOVE_NOTE: {
            return {
                ...state,
                notes: state.notes.filter(note => note !== action.payload)
            }
        }
        default:
            return state
    }
}