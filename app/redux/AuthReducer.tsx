interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = { isAuthenticated: false };

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

interface AuthAction {
  type: typeof LOGIN | typeof LOGOUT;
}

export function authReducer(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthenticated: true };
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
}
