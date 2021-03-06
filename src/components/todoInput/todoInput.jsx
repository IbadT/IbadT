import React from "react";
import PropTypes from 'prop-types';
// import './todoInput.css';

// тут находится сам инпут и иконка для него

const ToDoInput = ({ value, onChange }) => (
    <div className="todo-input-wrapper">
      <i className="fas fa-plus" />
      <input
        className="todo-input"
        placeholder="Click to add task"
        onChange={onChange}
        value={value}
      />
    </div>
  );
  
  ToDoInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
  }
  
  ToDoInput.defaultProps = {
    onChange: () => {},
    value: '',
  }
  
  export default ToDoInput;