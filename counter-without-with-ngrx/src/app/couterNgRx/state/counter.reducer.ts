import { Action, createReducer, on } from "@ngrx/store"
import { changeChannelName, customincrement, decrement, increment, reset } from "./counter.actions"
import { CounterState, initialState } from "./counter.state"


const _couterReducer = createReducer(initialState, 
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customincrement, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.count
        }
    }),
    on(changeChannelName, (state) => {
        return {
            ...state,
            channelName: 'Modified Sample channel'
        }
    })
)

export function counterReducer(state: CounterState | undefined, action: Action) {
    return _couterReducer(state, action)
}