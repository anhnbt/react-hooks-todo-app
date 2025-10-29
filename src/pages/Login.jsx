import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Login() {
  let navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ban dang nhap voi tai khoan:', form);
    if (form.username === 'admin' && form.password === 'admin') {
      alert('Dang nhap thanh cong!');
      navigate('/');
    } else {
      alert('Dang nhap that bai! Vui long thu lai.');
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={form.username}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          id="password"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
