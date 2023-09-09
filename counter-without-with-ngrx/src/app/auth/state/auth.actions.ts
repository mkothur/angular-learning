import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const SIGNUP_START = '[auth page] signup start';
export const signUpStart = createAction(SIGNUP_START, props<{email: string, password: string}>());

export const SIGNUP_SUCCESS = '[auth page] signup success';
export const signUpSuccess = createAction(SIGNUP_SUCCESS, props<{user: User, redirect: boolean}>());

export const LOGIN_START = '[auth page] login start';
export const loginStart = createAction(LOGIN_START, props<{email: string, password: string}>());

export const LOGIN_SUCCESS = '[auth page] login success';
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ user: any; redirect: boolean }>());

export const LOGIN_FAIL = '[auth page] login fail';
export const loginFail = createAction(LOGIN_FAIL);

export const AUTO_LOGIN = '[auth page] auto login';
export const autoLogin = createAction(AUTO_LOGIN);

export const AUTO_LOGOUT = '[auth page] auto logout';
export const autoLogout = createAction(AUTO_LOGOUT);

