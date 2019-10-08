import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Control from './components/TaskControl';
import { connect } from 'react-redux';
import * as actions from './actions/index';
//import { BrowserRouter, Route, Link } from "react-router-dom";
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
    //lấy từ store thì khai bao maptoprop 
    var { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== '') {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    //gán lại từ đầu thuộc tính 
    this.props.onClearTask({
      _id: '',
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
    //console.log(this);
    return (

      <div className="container">
        <div className=" col-lg-12  border-bottom p-3 ml-0 row">
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

  return {
    itemEditing: state.data.itemEditing
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      // dispatch action toggleform bên action/index
      dispatch(actions.toggleForm())
    },
    onClearTask: (task) => {
      //addTask la cua index.js /actions
      //clear cái đã edit .
      dispatch(actions.setEditingRequest(task))
    },
    onOpenForm: () => {
      dispatch(actions.openForm())
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
