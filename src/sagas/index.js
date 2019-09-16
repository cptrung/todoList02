import {
    fork,
    put,
    takeLatest,
    //delay,
    //call,
    //cancelled,
    //take,
    //cancel
} from "redux-saga/effects";

import * as types from "./../contans/ActionTypes";
//import * as actions from "./../actions/index";
//import dataItem from '../dataItem';
//import tasks from "../reducers/tasks";
import { api } from './api';

function* fetchTodoList() {
    // use "redux - saga"
    // try {
    //     // const data = yield 
    //     //console.log(dataItem);
    //     yield put({
    //         type: types.LIST_SUCCESS,
    //         data: dataItem
    //     });
    // } catch (err) {
    //     yield put({
    //         type: types.LIST_FAILURE,
    //         err
    //     });
    // }
    try {
        const response = yield api.fetchTodoList();
        const data = response.data;
        yield put({
            type: types.LIST_SUCCESS,
            data
        });
    } catch (err) {
        yield put({
            type: types.LIST_FAILURE,
            err
        });
    }


}


function* DeleteTask(action) {
    try {
        //console.log(action);
        const { id } = action;
        const response = yield api.deleteTaskAPI(id);
        yield put({
            type: types.DELETE_TASK_SUCCESS,
            id: response.data.id
        });
    } catch (err) {
        yield put({
            type: types.DELETE_TASK_FAILURE,
            err
        });
    }
}

function* AddTask(action) {
    // use "redux - saga"
    // if (action) {
    //     console.log(action);
    //     const { task } = action;
    //     //const newTask = JSON.stringify({name:task.name, level:task.level});
    //     const newTask = { name: task.name, email: task.email, level: task.level };
    //     console.log(newTask);
    //     yield put({
    //         type: types.ADD_TASK_SUCCESS,
    //         data: newTask,
    //         //add lại cái mới dùng newTask
    //     });
    // } else {
    //     yield put({
    //         type: types.ADD_TASK_FAILURE,
    //         error: 'error'
    //     });
    // }

    //use API
    try {
        const { task } = action;
        const response = yield (api.addNewTaskAPI(task));

        yield put({
            type: types.ADD_TASK_SUCCESS,
            data: response.data
        });
        console.log(response.data);

    } catch (error) {
        yield put({
            type: types.ADD_TASK_FAILURE,
            error
        });
    }

}
function* EditingTask(action) {
    //console.log(action);
    // use "redux - saga"
    // const { task } = action
    // if (action) {
    //     yield put({
    //         type: types.TAKS_EDITING_SUCCESS,
    //         //task: action.task
    //         task
    //     });
    // } else {
    //     yield put({
    //         type: types.TAKS_EDITING_FAILUR,
    //         error: 'err'
    //     });
    // }

    //user API
    const { task } = action
    if (action) {
        yield put({
            type: types.TAKS_EDITING_SUCCESS,
            //task: action.task
            task

        });
    } else {
        yield put({
            type: types.TAKS_EDITING_FAILURE,
            error: 'err'
        });
    }
}
function* UpdateTask(action) {
    //console.log(action);
    // use "redux - saga"
    // if (action) {
    //     yield put({
    //         type: types.UPDATE_TASK_SUCCESS,
    //         task: action.task

    //     });
    // } else {
    //     yield put({
    //         type: types.UPDATE_TASK_FAILURE,
    //         error: 'err'
    //     });
    // }

    //use API
    try {
        const { task } = action;
        const response = yield (api.updateTaskAPI(task));
        yield put({
            type: types.UPDATE_TASK_SUCCESS,
            task: response.data
        });
    } catch (error) {
        yield put({
            type: types.UPDATE_TASK_FAILURE,
            error
        });
    }
}
function* SearchTask(action) {
    const { keyword } = action;
    if (action) {
        yield put({
            type: types.SEARCH_SUCCESS,
            keyword
        });
    } else {
        yield put({
            type: types.SEARCH_FAILURE,
            error: 'err'
        });
    }
}
function* SortTask(action) {
    const { sort } = action;
    if (action) {
        yield put({
            type: types.SORT_SUCCESS,
            sort
        });
    } else {
        yield put({
            type: types.SORT_FAILURE,
            error: 'err',
        })
    }
}

function* watchFectTodoList() {
    //yield take(taskTypes.LIST_ALL);
    //console.log('watching todolist');
    yield takeLatest(types.LIST_REQUEST, fetchTodoList);
}
function* watchDeleteTask() {
    yield takeLatest(types.DELETE_TASK, DeleteTask);
}
function* watchAddTask() {
    yield takeLatest(types.ADD_TASK, AddTask);
}
function* watchEditingTask() {
    yield takeLatest(types.TAKS_EDITING, EditingTask)
}
function* watchUpdateTask() {
    yield takeLatest(types.UPDATE_TASK, UpdateTask)
}
function* watchSearchTask() {
    yield takeLatest(types.SEARCH_TASK, SearchTask)
}
function* watchSortTask() {
    yield takeLatest(types.SORT_TASK, SortTask)
}
function* rootSaga() {
    yield fork(watchFectTodoList);
    yield fork(watchDeleteTask);
    yield fork(watchAddTask);
    yield fork(watchEditingTask);
    yield fork(watchUpdateTask);
    yield fork(watchSearchTask);
    yield fork(watchSortTask);
}

export default rootSaga;
