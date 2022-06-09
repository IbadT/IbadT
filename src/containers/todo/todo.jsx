import React from "react";
import Footer from '../../components/footer/footer';
import ToDoInput from '../../components/todoInput/todoInput';
import ToDoList from '../../components/todoList/todoList';
// import './todo.css';

// тут находится список задач

const TASKS = [
    {
      id: 1,
      text: 'Learn ReactJS',
      isCompleted: true,
    },
    {
      id: 2,
      text: 'Learn Redux',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Learn React Router',
      isCompleted: false,
    }
  ];
  
  class ToDo extends React.Component {
  
    state = {
      activeFilter: 'all',
    }
  
    render() {
      const { activeFilter } = this.state;
      const tasksList = TASKS;
      const isTasksExist = tasksList && tasksList.length > 0;
  
      return (
        <div className="todo-wrapper">
          <ToDoInput />
          {isTasksExist && <ToDoList tasksList={tasksList} />}
          {isTasksExist && <Footer amount={tasksList.length} activeFilter={activeFilter} />}
        </div>
      );
    }
  }
  
  export default ToDo;