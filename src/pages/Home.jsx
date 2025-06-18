import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mt-5">
      <h1>Bienvenido a la App</h1>
      <p>Navega por la aplicación:</p>
      <Link to="/login" className="btn btn-primary me-2">Login</Link>
      <Link to="/dashboard" className="btn btn-success">Dashboard</Link>
    </div>
  );
}