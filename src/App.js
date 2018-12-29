import React, { Component } from 'react';
import AddTodo from './components/addTodo';
import VisibleTodoList from './components/visibleTodoList';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
