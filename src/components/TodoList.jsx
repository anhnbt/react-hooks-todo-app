export default function TodoList(props) {
  return (
    <ul>
      {props.todos.map((item) => {
        return (
          <li className={item.completed ? 'active' : ''} key={item.id}>
            <input type="checkbox" checked={item.completed} />
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}
