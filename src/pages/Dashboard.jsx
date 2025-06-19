import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import data from '../data/products.json';
import { useState } from 'react';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const [productos] = useState(data);
  const [filtroNombre, setFiltroNombre] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [filtroPrecio, setFiltroPrecio] = useState('');

  const productosFiltrados = productos.filter((p) => {
    return (
      p.nombre.toLowerCase().includes(filtroNombre.toLowerCase()) &&
      (filtroCategoria === '' || p.categoria === filtroCategoria) &&
      (filtroPrecio === '' || p.precio <= parseFloat(filtroPrecio))
    );
  });

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={styles.containerDashboard}>
      <h2 className={styles.title}>Dashboard</h2>
      <p className="text-center mb-4">Bienvenido, <strong>{user?.username}</strong></p>
      <div className="text-center mb-4">
        <button className="btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
      </div>

      {/* Filtros */}
      <div className="row mb-4">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre"
            value={filtroNombre}
            onChange={(e) => setFiltroNombre(e.target.value)}
          />
        </div>
        <div className="col">
          <select
            className="form-select"
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            <option value="Tecnología">Tecnología</option>
            <option value="Calzado">Calzado</option>
            <option value="Ropa">Ropa</option>
          </select>
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            placeholder="Precio máximo"
            value={filtroPrecio}
            onChange={(e) => setFiltroPrecio(e.target.value)}
          />
        </div>
        <div className="col">
          <button
            className="btn btn-secondary w-100"
            onClick={() => {
              setFiltroNombre('');
              setFiltroCategoria('');
              setFiltroPrecio('');
            }}
          >
            Limpiar filtros
          </button>
        </div>
      </div>

      {/* Productos */}
      <div className="row">
        {productosFiltrados.map((p) => (
          <div key={p.id} className="col-md-4 mb-4">
            <div className={`card ${styles.cardCustom}`}>
              <div className="card-body">
                <h5 className="card-title">{p.nombre}</h5>
                <p className="card-text">Categoría: {p.categoria}</p>
                <p className="card-text">Precio: ${p.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}