import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {
    //use state để luu trữ 
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            email: '',
            level: 'medium',
        };
    }
    //close Form 
    onCloseForm = () => {
        this.props.onCloseForm();
    }
    //gắn vào edit 
    componentWillMount() {
        if (this.props.itemEditing && this.props.itemEditing.id != null) {
            this.setState({
                id: this.props.itemEditing.id,
                name: this.props.itemEditing.name,
                email: this.props.itemEditing.email,
                level: this.props.itemEditing.level
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                email: nextProps.itemEditing.email,
                level: nextProps.itemEditing.level
            })
        }
    }


    //viết func:  a =()=>{} k cần đăng ký lại 
    //mặt định formik trong on submit fai có trường field 
    //field trả về giá trị nếu add sẽ thay đổi giá dc 
    onSubmit = (field) => {
      
        //truyền state ra ngoài cha
        //this.props.onSubmit(field);
        // onAddTask : đã đc props ở dưới cùng hàm mapdispatch
        if(field.id === ''){
        this.props.onAddTask(field);
        //console.log(field);
        //khai báo trong app là cancelForm = this.closeFrom .. 
        this.props.onCloseForm(); }
        else {
            this.props.UpdateTaskRequest(field);
            this.props.onCloseForm();

        }
    }
    render() {
        //console.log(this.props.itemEditing);
        //var { id } = this.state;
        if (!this.props.isDisplayForm) return '';
        return (
            <Formik
                // có thể thay đổi : 
                enableReinitialize
                initialValues={this.state}
                validationSchema={Yup.object().shape({
                    name: Yup
                        .string()
                        .required(' Name is required')
                        // removes whitespace 2 bên của string 
                        .trim()
                        .min(3, 'Username must have min 3 characters')
                        .max(20, 'Username have max 20 characters'),
                    email: Yup.string()
                        .required(' Email is required')
                        // removes whitespace 2 bên của string 
                        .trim()
                        .email('Email is invalid'),
                    // .min(3, 'email must be at least 3 characters')

                })}
                onSubmit={this.onSubmit}
                render={({ errors, touched }) => (
                    <div className="col-lg-5 mx-auto p-3 alert alert-secondary">
                        <Form  >
                            <div className="form-group">
                                {/* {this.props.id !== '' ? 'Update Item' : 'Add Item'} */}
                                {/* <h2 className="text-center text-danger ">Add Item</h2> */}
                            </div>
                            <div className="form-group">
                                {touched.name && errors.name && <label className="custom-lable">{errors.name}</label>}
                                <h5 className="text-left">Name :</h5>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="name"
                                />
                            </div>
                            <div className="form-group">
                                {touched.email && errors.email && <label className="custom-lable">{errors.email}</label>}
                                <h5 className="text-left">Email :</h5>
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="email"
                                />
                            </div>
                            <div>
                                <h5 className="text-left">Level :</h5>
                                <Field component="select"
                                    className="form-control"
                                    name="level"
                                >
                                    <option value="medium">Medium</option>
                                    <option value="small">Small</option>
                                    <option value="hight">Hight</option>
                                </Field>
                            </div>
                            <div className="p-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary mx-4"  >
                                    Submit
                                 </button>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => this.onCloseForm()} >
                                    Cancel
                                </button>
                            </div>
                        </Form>
                    </div>
                )}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        task: state.task,
        //check có dữ liệu hay k : console.log(this.props.itemEditing); 
        itemEditing: state.itemEditing,
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            //addTask la cua index.js /actions
            dispatch(actions.AddTaskRequest(task))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        UpdateTaskRequest : (task) => {
            dispatch(actions.UpdateTaskRequest(task));
        }
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);