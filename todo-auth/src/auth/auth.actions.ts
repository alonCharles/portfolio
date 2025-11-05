import { createAction, props } from "@ngrx/store";
import { User, AuthResponse } from "./auth.model";

export const registerUser = createAction(
    '[Auth Page] Registered User',
    props<{credentials: {name: string; email: string; password: string}}>()
);

export const registerSuccess = createAction(
    '[Auth Api] Register Success',
    props<{user: User}>()
)

export const registerFailed = createAction(
    '[Auth Api] Register Failed',
    props<{error: any}>()
)

export const loginUser = createAction(
    '[login page] Login User',
    props<{credentials: {email: string; password:string}}>()
);

export const loginSuccess = createAction(
    '[Auth Api] Login Success',
    props<{authResponse: AuthResponse}>()
)

export const loginFailed = createAction(
    '[Auth Api] Login Failed',
    props<{error: any}>()
);

export const logoutUser = createAction(
    '[Api logout] Logout User'
)