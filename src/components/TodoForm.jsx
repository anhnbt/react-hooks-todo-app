export default function TodoForm({ todo, onChange, onAdd }) {
  return (
    <form onSubmit={onAdd}>
      <input
        type="text"
        value={todo}
        onChange={onChange}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
