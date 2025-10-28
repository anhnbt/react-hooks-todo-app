import { useState } from 'react';

function LoginForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');

  if (!isLogin) {
    return (
      <div>
        <h3>Đăng nhập</h3>
        <input
          placeholder="Tên người dùng"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => setIsLogin(true)}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h3>Xin chào {username || 'bạn'}</h3>
      <button onClick={() => setIsLogin(false)}>Logout</button>
    </div>
  );
}

export default LoginForm;
