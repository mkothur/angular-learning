import { createAction, props } from "@ngrx/store";
import { Post } from "../../models/posts.model";

export const ADD_POST = '[posts page] addpost';
export const addPost = createAction(ADD_POST, props<{post: Post}>());

export const UPDATE_POST = '[posts page] updatepost';
export const updatePost = createAction(UPDATE_POST, props<{post: Post}>());

export const DELETE_POST = '[posts page] deletepost';
export const deletePost = createAction(DELETE_POST, props<{id: string}>());

