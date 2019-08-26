import React , {Component} from 'react';

import TaskItem from './TaskItem';


class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render(){
        const { data } = this.props;
        return (
            <div class="container-fluid">
            <div class="row my-4 ">
                <div class="col-xl-12  ml-auto">
                    <div class="row align-items-center">
                        <div class="table-responsive">
                            <table class="table table-striped bg-light text-center text-dark ">
                                <thead>
                                    <tr>
                                        <th colspan="12" class="text-lg-left bg-secondary text-light" > List Item</th>
                                    </tr>
                                    <tr >
                                        <th  >#</th>
                                        <th colspan="3" >Name</th>
                                        <th colspan="4" >Email</th>
                                        <th colspan="2" >Level</th>
                                        <th colspan="2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => {
                                        return < TaskItem key={index} item={item} index={index}
                                        onEdit={this.props.onEdit}
                                        onDelete={this.props.onDelete}
                                        />
                                    })}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default TaskList;