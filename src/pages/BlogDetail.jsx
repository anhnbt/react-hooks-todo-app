import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function BlogDetail() {
  const { id } = useParams();

  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/' + id)
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, [id]);

  console.log('Blog ID:', id);

  if (!todo) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{todo.title}</h1>
      <p>{todo.completed}</p>
      <p>{todo.id}</p>
      <p>{todo.userId}</p>
      <Link to="/">Go back to Home</Link>
    </>
  );
}
