import React, { Component } from 'react';
import TaskItem from './TaskItem';
// kết nối store để lấy xuống
import { connect } from 'react-redux';
import { orderBy } from 'lodash';
import * as actions from './../actions/index';
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {

        this.props.ListRequest();
    }
    render() {
        //console.log('abc');
        var { keyword, sort, tasks } = this.props;
        //console.log(sort);
        //console.log(this.props.data);

        //search 
        //console.log(this.props.keyword);
        //filter theo name kiem tra chứa keyword.
        if (keyword) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            });
            // console.log(data); keywork có ép kiểu
        }

        //sort 
        //tasks :Returns the new sorted array(dữ liêu) 
        tasks = orderBy(tasks, [sort.by], [sort.orderDir]);
        // data = orderBy(data ,
        //     (i)=> {
        //         return i.name 
        //     }, ['desc'] 
        //     );
        //  console.log(data) ;
        //console.log(this.props.todos);


        var element = tasks.map((item, index) => {
            return <TaskItem
                key={index}
                item={item}
                index={index}
            />
        })

        return (
            <div className="container-fluid">
                <div className="row my-4 ">
                    <div className="col-xl-12  ml-auto">
                        <div className="row align-items-center">
                            <div className="table-responsive">
                                <table className="table table-striped bg-light text-center text-dark ">
                                    <thead>
                                        <tr>
                                            <th colSpan="12" className="text-lg-left bg-secondary text-light" > List Item</th>
                                        </tr>
                                        <tr >
                                            <th  >#</th>
                                            <th colSpan="3" >Name</th>
                                            <th colSpan="4" >Email</th>
                                            <th colSpan="2" >Level</th>
                                            <th colSpan="2">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {element}
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
//lấy các state trên tasks chuyển thành các props của component.
const mapStateToProps = (state) => {
    //lấy về  key : value  => key :data , value : state 
    return {
        //data : lúc khi render() , khai báo {data} =this.props . 
        // state.tasks : tasks fai truyền từ index.js của reducer 
        tasks: state.data.tasks,
        keyword: state.data.search, // bên search // lấy từ trên store 
        sort: state.data.sort,  //bên sort , đã lấy dc store 
    }
};
//dispatch list request
const mapDispatchToProps = (dispatch, props) => {
    return {
        ListRequest: () => {
            dispatch(actions.listRequest());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);