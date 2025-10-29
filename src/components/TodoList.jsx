import { Link } from 'react-router-dom';

export default function TodoList(props) {
  return (
    <ul>
      {props.todos.map((item) => {
        return (
          <li className={item.completed ? 'active' : ''} key={item.id}>
            <input type="checkbox" checked={item.completed} />
            <Link to={'/blogs/' + item.id}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
