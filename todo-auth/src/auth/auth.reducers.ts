import { createReducer, on } from "@ngrx/store";
import { AuthState } from "./auth.model";
import * as AuthActions from '../auth/auth.actions'

export const authFeatureKey = 'auth'

export const initialState: AuthState = {
    user: null,
    token: null,
    isLoading: false,
    isLoggedIn: false,
    error: null
};

export const authReducer = createReducer(
    initialState,

    on(AuthActions.registerUser, (state) => ({
        ...state,
        isLoading: true,
        error: null
    })),
    on(AuthActions.registerSuccess, (state, { user }) => ({
        ...state,
        isLoading: false,
        error: null
    })),
    on(AuthActions.registerFailed, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error.message || 'Registration Failed'
    })),
    on(AuthActions.loginUser, (state) => ({
        ...state,
        isLoading: true,
        error: null
    })),
    on(AuthActions.loginSuccess, (state, { authResponse }) => ({
        ...state,
        user: authResponse.user,
        isLoading: false,
        error: null,
        isLoggedIn: true,
        token: authResponse.accessToken
    })),
    on(AuthActions.loginFailed, (state, { error }) => ({
        ...state,
        user: null,
        isLoading: false,
        error: error.message || 'Login Failed',
        isLoggedIn: false,
        token: null
    })),
    on(AuthActions.logoutUser, () => ({
        ...initialState
    }))
)