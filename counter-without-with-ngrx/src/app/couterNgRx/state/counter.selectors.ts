import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";


const getStates = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getStates, state => {
    return state.counter
})

export const getChannel = createSelector(getStates, state => {
    return state.channelName
})