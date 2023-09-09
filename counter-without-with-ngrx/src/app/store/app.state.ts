import { AuthReducer } from "../auth/state/auth.reducer";
import { AuthState } from "../auth/state/auth.state";
import { counterReducer } from "../couterNgRx/state/counter.reducer";
import { CounterState } from "../couterNgRx/state/counter.state";
import { postsReducer } from "../posts/state/posts.reducer";
import { PostsState } from "../posts/state/posts.state";
import { sharedReducer } from "./shared/shared.reducer";
import { SharedState } from "./shared/shared.state";


export interface AppState {
    // counter: CounterState;
    // posts: PostsState;
    auth: AuthState
    shared: SharedState
}

export const appReducer = {
    // counter: counterReducer,
    // posts: postsReducer,
    auth: AuthReducer,
    shared: sharedReducer
}