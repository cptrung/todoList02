import React, { Component } from 'react';
import Search from './TaskSearch';
import TaskSort from './TaskSort';

class Control extends Component {
    render() {
        return (
            <div className=" row  container-fluid ">
                <div className="col-lg-7 ">
                    <Search />
                </div>
                <div className=" col-lg-5 ">
                    <TaskSort />
                </div>
            </div>
        );
    }
}
export default Control;