import { createAction, props } from "@ngrx/store";

export const SET_LOADING_STATE = '[shared state] set loading spinner';
export const setLoadingSpinner = createAction(SET_LOADING_STATE, props<{status: boolean}>());

export const SET_ERROR_STATE = '[shared state] set error message';
export const setErrorMessage = createAction(SET_ERROR_STATE, props<{message: string}>());



