import { login, logout } from '../../actions/auth';

describe('Auth actions test', () => {
  it('should generate login action object', () => {
    const uid = 'abc123';
    const action = login(uid);
    expect(action).toEqual({
      type: 'LOGIN',
      uid,
    });
  });

  it('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
      type: 'LOGOUT',
    });
  });
});
