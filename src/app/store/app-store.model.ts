import { AuthState } from "../auth/store/auth-store.model";

export interface AppState {
    auth: AuthState;
}