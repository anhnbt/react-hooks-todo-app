import { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    role: 'STUDENT',
    note: '',
    avatar: 'avatar.png',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.files);
  };

  const handleAvatarChange = (e) => {
    console.log(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ban dang nhap voi tai khoan:', form);
    if (form.username === 'admin') {
      alert('Dang nhap thanh cong!');
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
        <label htmlFor="role">Vai trò</label>
        <select name="role" id="role" value={form.role} onChange={handleChange}>
          <option value="">-- Chọn vai trò --</option>
          <option value="STUDENT">Học viên</option>
          <option value="TEACHER">Giảng viên</option>
        </select>
        <br />
        <label htmlFor="note">Ghi chú:</label>
        <textarea
          name="note"
          id="note"
          rows="4"
          cols="50"
          value={form.note}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="avatar">Avatar:</label>
        <input
          type="file"
          name="avatar"
          id="avatar"
          onChange={handleAvatarChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
