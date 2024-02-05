import React, { useState } from 'react';

const Formulario = ({ setError }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, email, password, confirmPassword } = formData;

    if (!nombre || !email || !password || !confirmPassword) {
      setError({
        error: true,
        mensaje: 'Completa todos los campos',
        color: 'warning',
      });
      return;
    }

    if (!isValidEmail(email)) {
      setError({
        error: true,
        mensaje: 'Formato de correo electrónico incorrecto',
        color: 'danger',
      });
      return;
    }

    if (password !== confirmPassword) {
      setError({
        error: true,
        mensaje: 'Las contraseñas no coinciden',
        color: 'danger',
      });
      return;
    }
    setFormData({
      nombre: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    setError({
      error: false,
      mensaje: 'Cuenta creada exitosamente',
      color: 'success',
    });
  };

  return (
    <div className="Formulario p-4 bg-white rounded shadow">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            onChange={handleChange}
            value={formData.nombre}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Tu email@ejemplo.com"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Contraseña"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirma tu contraseña"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
        </div>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-success">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
