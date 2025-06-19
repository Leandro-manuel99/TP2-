import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className="text-center mb-4">Bienvenido a "Todo-Compras"</h1>
      <p className="text-center mb-4 fs-5">Ingresa a la aplicación:</p>
      <div className={styles.homeText}>
        <Link to="/login" className="btn btn-primary me-3 px-4 py-2">
          Login
        </Link>
      </div>
    </div>
  );
}