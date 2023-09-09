import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState } from "./shared.state";

const getSharedState = createFeatureSelector<SharedState>("shared");

export const getLoading = createSelector(getSharedState, state => {
    return state.showLoading;
})

export const getErrorMessage = createSelector(getSharedState, state => {
    return state.errorMessage;
})