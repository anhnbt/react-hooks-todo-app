import { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Giả lập việc tải dữ liệu từ server
    console.log('Component vừa được mount');
    setTodos(['Học React', 'Tập thể dục', 'Đọc sách']);

    return () => console.log('Component sắp unmount');
  }, []);

  return (
    <div>
      <h3>Danh sách việc cần làm</h3>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
