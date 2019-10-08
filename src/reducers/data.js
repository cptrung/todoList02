import * as types from '../contans/actionTypes';
//import dataItem from '../dataItem';
import _ from "lodash";
//import randomstring from 'randomstring';
//index chính của reducer , 

//data
var initialState = {
    tasks: [],
    sort: {
        by: 'name',
        orderDir: 'asc',
    },
    isDisplayForm: false,
    itemEditing: {
        _id: '',
        name: '',
        email: '',
        level: 'medium',
    },
    search: '',
};
// check find name
var findIndex = (data, id) => {
    var index = -1;
    data.forEach((item, i) => {
        if (item._id === id) {
            index = i;
        }
    })
    return index;
}

var data = (state = initialState, action) => {
    switch (action.type) {
        // all list 
        case types.LIST_REQUEST:
            //console.log(action);
            return { ...state };
        case types.LIST_SUCCESS:
            //console.log(typeof action.data);
            // biến action.data lấy từ bên index.js/action
            //state.tasks = action.data; c1
            return { ...state, tasks: action.data };
        case types.LIST_FAILURE:
            return { ...state };

        //add task 
        case types.ADD_TASK:
            return { ...state };
        case types.ADD_TASK_SUCCESS:
            //console.log(state); // trỏ đến dữ liệu khi add
            // use mãng tĩnh 
            //let newTask = {
            //     // id: action.data.id,
            //     name: action.data.name,    // do action lúc đầu khai báo data nên action.data.name
            //     email: action.data.email,
            //     level: action.data.level,
            // };
            // newTask.id = randomstring.generate();
            //state.tasks.push(newTask);
            // return { ...state, tasks: [...state.tasks, newTask] };
            console.log("abc");
            console.log(action.data);
            
            state.tasks = [...state.tasks, action.data];
            return { ...state };
        case types.ADD_TASK_FAILURE:
            return { ...state };

        // update task ->edit task 
        case types.UPDATE_TASK:
            return { ...state };
        case types.UPDATE_TASK_SUCCESS:
            //console.log(action.task.id);
            //c1
            var index = findIndex(state.tasks, action.task._id);
            //c2
            // var index = _.findIndex(state.tasks,
            //     task => {
            //         return task._id === action.task._id;
            //     });

            // c1 . use mãng tĩnh chưa có id  
            // state.tasks = [...state.tasks.slice(0, index),
            //     {
            //         ...action.task,
            //         id: action.task.id,
            //         name: action.task.name,
            //         email: action.task.email,
            //         level: action.task.level
            //     },
            //     ...state.tasks.slice(index + 1)]
            //     return { ...state };
            return {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, index),
                    {
                        ...action.task,
                        //id: action.task.id, //id use mãng tĩnh 
                        name: action.task.name,
                        email: action.task.email,
                        level: action.task.level
                    },
                    ...state.tasks.slice(index + 1)
                ]
            };

        case types.UPDATE_TASK_FAILURE:
            return { ...state };

        //delete item   
        case types.DELETE_TASK:
            console.log(state.tasks);
            return { ...state };
        case types.DELETE_TASK_SUCCESS:
            console.log(state.tasks);

            let id = action._id;
            console.log(action._id);
            // //note findIndex(state ) --> findIndex(state.tasks )
            index = findIndex(state.tasks, id);
            console.log(index);

            // localStorage.setItem('task', JSON.stringify(state));
            //console.log(state.tasks);
            return {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, index),
                    ...state.tasks.slice(index + 1),
                ]
            };
        // state.tasks = [
        //     ...state.tasks.slice(0, findIndex(state.tasks, action.id)),
        //     ...state.tasks.slice((findIndex(state.tasks, action.id)) + 1)
        //   ] ;

        // console.log(state.tasks);  
        // console.log(action.id)
        // return {
        //     ...state
        //   };

        case types.DELETE_TASK_FAILURE:
            console.log('error');
            return { ...state };

        // isDisplayForm 
        case types.TOGGLE_FORM:
            state = { ...state, isDisplayForm: !state.isDisplayForm }
            return state;
        case types.OPEN_FORM:
            return { ...state, isDisplayForm: true };

        case types.CLOSE_FORM:
            return { ...state, isDisplayForm: false };

        //set Editting 
        // [...] nối mảng
        case types.SET_EDITING:
            return { ...state };
        case types.SET_EDITING_SUCCESS:
            return { ...state, itemEditing: action.task };
        case types.SET_EDITING_FAILURE:
            return { ...state };

        //sort 
        case types.SORT_TASK:
            //console.log(action.sort);
            return { ...state };
        case types.SORT_SUCCESS:
            //console.log(action);
            return {
                ...state,
                sort: {
                    by: action.sort.by,
                    orderDir: action.sort.orderDir
                }
            };
        case types.SORT_FAILURE:
            return { ...state };

        //search 
        case types.SEARCH_TASK:
            return { ...state };
        case types.SEARCH_SUCCESS:
            // console.log(action);
            return {
                ...state, search: action.keyword
            };
        case types.SEARCH_FAILURE:
            return { ...state };

        default:
            return state;
    }
}
export default data;
