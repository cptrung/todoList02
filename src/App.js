import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'Nguyễn Thị Lan 123',
          email: 'lan@gmail.com',
          level: 'medium',
        },
        {
          id: 2,
          name: 'Hoàng Văn  ',
          email: 'nam@gmail.com',
          level: 'small',
        },
        {
          id: 3,
          name: 'Lê Thị Như Ý',
          email: 'nhuy@gmail.com',
          level: 'medium',
        },
        {
          id: 4,
          name: '123 Sang',
          email: 'sang@gmail.com',
          level: 'hight',
        }
      ],
      isDisplayForm: false,
      taskEditing: null
    };

  }

  // show Form 
  onToggleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        //taskEditing: null
      });
    }
  }

  //ra cha nhận lại 
  onSubmit = (task) => {
    //console.log(task) ;
    var { data } = this.state;
    if (task.id === '') {
      data.push(task);
    } else {
      var index = this.findIndex(this.state.data, task.id);
      data[index] = task;

    }


    this.setState({
      data: data,
      taskEditing: null
    });
  }
  // close Form 
  // onCloseForm = () => {
  //   this.setState ({
  //     isDisplayForm : false 
  //   });
  // }


  //    //delete
  //   // 1. func tim vi tri cua item
  //   findIndex = (id) => {
  //     var {tasks} = this.state ;

  //     tasks.forEach((tasks, index) => {
  //       if (this.state.data.id === id) {
  //         return index ; 
  //       }
  //     })
  //     return -1 ;

  //   }
  //   // 2. xóa Item
  //  onDelete = (id) => {
  //     if (window.confirm('Are you sure you want to delete this item?')) {
  //       var {tasks} = this.state ;
  //       var index = this.findIndex( id);
  //       if (index !== -1 ){
  //         tasks.splice (index , 1);
  //         this.setState({
  //           tasks : tasks 
  //         });
  //       }
  //     }
  //   }


  //delete
  // 1. func tim vi tri cua item
  findIndex = (data, id) => {
    var index = -1;
    data.forEach((item, i) => {
      if (item.id === id) {
        index = i;
      }
    })
    return index;

  }
  // 2. xóa Item
  onDelete = (item) => {
    //   console.log(item);
    //console.log(this.findIndex(this.state.data,item.id));
    if (window.confirm('Are you sure you want to delete this item?')) {
      var index = this.findIndex(this.state.data, item.id);
      this.setState({
        //coppy đối tượng bằng dấu 3 chấm
        data: [
          ...this.state.data.slice(0, index),
          ...this.state.data.slice(index + 1)
        ]
      });
    }
  }


  //edit

  onEdit = (item) => {
    //console.log(id) ;
    var { data } = this.state;
    var index = this.findIndex(this.state.data, item.id);
    var taskEditing = data[index];

    this.setState({
      taskEditing: taskEditing
    });
    this.onToggleForm();

    //console.log(this.state.taskEditing)

  }

  render() {
    //use es6 
    var { isDisplayForm, taskEditing } = this.state;
    var elmTaskForm = isDisplayForm ? <TaskForm
      onSubmit={this.onSubmit}
      task={taskEditing}
    /> : '';
    return (
      <div className="container">
        <div className=" col-lg-12  border-bottom p-3 row">
          <h1>Project 01 - ToDo List <small>ReactJS</small></h1>
        </div>
        <div class="row col-lg-12 pt-3">
          <div class="col-lg-9 ml-auto ">
            Task Control
          {/* button search , sort .... */}
          </div>
          <div class="col-lg-3 ml-auto">
            <button type="button" className="btn btn-info btn-block " onClick={this.onToggleForm}  >
              {(this.state.isDisplayForm) ? 'Close Item' : 'Add Item'}

            </button>
          </div>
        </div>
        <TaskList
          data={this.state.data}
          onEdit={this.onEdit}
          onDelete={this.onDelete}


        />
        <div className="row">
          {/* <TaskForm
        /> */}
          {elmTaskForm}
        </div>
      </div>
    );

  }

}

export default App;
