import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { loginService } from '../services/authService';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginService(username, password);
      login(user);
      navigate('/dashboard');
    } catch (error) {
      alert('Login fallido: ' + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Usuario" value={username} 
        onChange={(e) => setUsername(e.target.value)} className="form-control mb-3" />
        <input type="password" placeholder="Contraseña" value={password} 
        onChange={(e) => setPassword(e.target.value)} className="form-control mb-3" />
        <button type="submit" className="btn btn-primary">Ingresar</button>
      </form>
    </div>
  );
}