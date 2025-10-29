import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  // state
  const [language, setLanguage] = useState('es');
  const [theme, setTheme] = useState('dark');

  // effect
  // dependencies array
  useEffect(() => {
    console.log('Language changed to:', language);
    document.title = title();
  }, [language]);

  // function

  // return

  const title = () => {
    switch (language) {
      case 'vi':
        return 'Ứng dụng Todo';
      case 'en':
        return 'Todo App';
      case 'ja':
        return 'やることアプリ';
      case 'es':
        return 'Aplicación de Tareas';
      default:
        return 'Todo App';
    }
  };

  return (
    <header
      style={{
        backgroundColor: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black',
      }}
    >
      <h1>{title()}</h1>
      <nav>
        <select
          name="language"
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="vi">Vietnamese</option>
          <option value="en">English</option>
          <option value="ja">Japanese</option>
          <option value="es">Spanish</option>
        </select>

        <select
          name="theme"
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="dark">Dark mode</option>
          <option value="light">Light mode</option>
          <option value="system">System</option>
        </select>
        <Link to="/about">About</Link>
        <Link to="/login" style={{ color: 'white' }}>
          Login
        </Link>
      </nav>
    </header>
  );
}
