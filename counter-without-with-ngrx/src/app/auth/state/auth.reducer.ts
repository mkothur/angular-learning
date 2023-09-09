import { Action, createReducer, on } from "@ngrx/store";
import { AuthState, initialState } from "./auth.state";
import { autoLogout, loginSuccess, signUpSuccess } from "./auth.actions";

const _authReducer = createReducer(initialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(signUpSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(autoLogout, (state, action) => {
        return {
            ...state,
            user: null
        }
    }),
    
)

export function AuthReducer(state: AuthState | undefined, action: Action) {
    return _authReducer(state, action)
}