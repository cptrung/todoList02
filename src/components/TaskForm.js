import React, { Component } from 'react';
// import randomstring from 'randomstring' ;

class TaskForm extends Component {
    //use state để luu trữ 
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            email: '',
            level: 1,
        }
    }

    //gắn vào edit 
    componentWillMount() {
        // props task đổ dữ liệu ra ngoài form
        if (this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                email: this.props.task.email,
                level: this.props.task.level
            });
            //console.log(this.state);
        }
    }
    componentWillReceiveProps(nextProps) {
        //nếu 2 tồn tại 
        if (nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                email: nextProps.task.email,
                level: nextProps.task.level
            });
            // console.log(this.state);
        }
        // else if (!nextProps.task) {
        //     //console.log('sua ->them');
        //         this.setState ({
        //             id : '' ,
        //             name : '' ,
        //             email : '' ,
        //             level : 1 ,
        //         });
        // }
    }

    //func onchange  //nhân lại event //tạo bien target
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var email = target.email;
        var value = target.value;
        this.setState({
            [name]: value,
            [email]: value,
        });

    }
    //viết func k cần đăng ký lại 
    onSubmit = (event) => {
        event.preventDefault();
        //truyền state ra ngoài cha
        //console.log(this.state) ;
        this.props.onSubmit(this.state);
        //sau khi submit : cancel  && close form
        this.onClear();
    }
    //khi cancel xóa all state
    onClear = () => {
        this.setState({
            name: '',
            email: '',
            level: 1
        });

    }
    //close form
    onCloseForm = () => {
        this.props.onCloseForm();
    }


    render() {
        console.log(this.props.cancelForm);
        var { id } = this.state;
        return (
            <div class="col-lg-5 mx-auto p-3 alert alert-secondary">
                <form onSubmit={this.onSubmit} >
                    <div class="form-group">
                        { id !== '' ? 'Update Item' : 'Add Item'}
                        {/* <h2 class="text-center text-danger ">Add Item</h2> */}
                    </div>
                    <div class="form-group">
                        <h5 className="text-left">Name :</h5>
                        <input type="text" className="form-control"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}

                        />
                    </div>

                    <div class="form-group">
                        <h5 className="text-left">Email :</h5>
                        <input type="text" className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}

                        />
                    </div>
                    <div>
                        <h5 className="text-left">Level :</h5>
                        <select className="form-control" name="level"
                            value={this.state.level} onChange={this.onChange}  >
                            <option value="medium">Medium</option>
                            <option value="small">Small</option>
                            <option value="hight">Hight</option>
                        </select>
                    </div>
                    <div className="p-3">
                        <button type="submit" className="btn btn-primary mx-4"  >
                            Submit
                    </button>
                        {/* onClick={() => this.props.handleFormClickCancel()} */}
                        <button type="button" className="btn btn-success"
                            onClick={() => this.props.cancelForm()} >
                            Cancel
                    </button>.
                </div>
                </form>
            </div>
        );
    }
}

export default TaskForm;