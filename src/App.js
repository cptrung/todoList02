import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Control from './components/Control';
import { connect } from 'react-redux';
import * as actions from './actions/index';

//demo Ex redux 
//import demo from './trainning/demo' ;   
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // show Form 
  onToggleForm = () => {
    // do mapDispatchToProps là đặt onToggleForm
    var { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== '') {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearTask({
      id: '',
      name: '',
      email: '',
      level: 'medium'
    });
  }
  render() {
    //use es6 
    //let{by , orderDir} = this.state ;

    // Func Sort
    // data.sort((a, b) => {
    //   var nameA = a.name.toUpperCase();
    //   var nameB = b.name.toUpperCase();
    //   if (nameA > nameB) return value;
    //   else if (nameA < nameB) return -value;
    //   else return 0;
    // });
    return (
      <div className="container">
        <div className=" col-lg-12  border-bottom p-3 row">
          <h1>Project 01 - ToDo List <small>ReactJS</small></h1>
        </div>
        <div className="row col-lg-12 pt-3">
          <div className=" row col-lg-9 ml-auto ">
            {/* Task Control */}
            <Control />
          </div>
          <div className="col-lg-3 ml-auto">
            <button type="button" className="btn btn-info btn-block " onClick={this.onToggleForm}  >
              Add Item
            </button>
          </div>
        </div>
        <TaskList />
        <div className="row">
          <TaskForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      //cần dispatch action toggleform bên action/index
      dispatch(actions.toggleForm())
    },
    onClearTask: (task) => {
      //addTask la cua index.js /actions
      //clear cái đã edit .
      dispatch(actions.TaskEditingRequest(task))
    },
    onOpenForm: () => {
      dispatch(actions.openForm())
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
