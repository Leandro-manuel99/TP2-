export async function loginService(username, password) {
 
  if (username === 'admin' && password === '1234') {
    return { username: 'admin', token: 'fake-token' };
  }
  throw new Error('Credenciales incorrectas');
}