import React from 'react';
import Footer from './Footer';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import '../styles.css';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: 'ReactJS',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => this.setState({ todos: json }));
  }

  handleChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  handleAddTodo = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      todos: [...prevState.todos, prevState.todo],
      todo: '',
    }));
  };

  render() {
    return (
      <>
        <Header />
        <TodoForm
          todo={this.state.todo}
          onChange={this.handleChange}
          onAdd={this.handleAddTodo}
        />
        <TodoList todos={this.state.todos} />
        <Footer />
      </>
    );
  }
}
