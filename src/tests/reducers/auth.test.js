import authReducer from '../../reducers/auth';

describe('Auth Reducer', () => {
  it('should set uid for login', () => {
    const action = {
      type: 'LOGIN',
      uid: 'abc123',
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
  });

  it('should clear uid for logout', () => {
    const action = {
      type: 'LOGOUT',
    };
    const state = authReducer({ uid: 'anything' }, action);
    expect(state).toEqual({});
  });
});
