import { Action } from '@ngrx/store';

export function simpleReducer (state:string="Hello World", action: Action) {
    console.log('simple reducer', action.type, state)

    switch(action.type) {
        case 'SPANISH':
            return state = "Hola Munde"
        case 'FRENCH':
            return state = "Bonjour le monde"
        default:
            return state;
    }
}