export async function loginService(username, password) {
  // Simulación básica (puede ser reemplazado por API real)
  if (username === 'admin' && password === '1234') {
    return { username: 'admin', token: 'fake-token' };
  }
  throw new Error('Credenciales incorrectas');
}