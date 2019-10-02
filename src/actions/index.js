import * as types from '../contans/actionTypes';
//import sort from '../reducers/sort';

// all list 
export const listRequest = () => {
  return {
    type: types.LIST_REQUEST,
  };
};

export const listSuccess = data => {
  return {
    type: types.LIST_SUCCESS,
    data
  };
};
export const listFail = error => {
  return {
    type: types.LIST_FAILURE,
    error
  };
};

//toggleForm
export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM
  }
}

//open From 
export const openForm = () => {
  return {
    type: types.OPEN_FORM
  }
}

//close form 
export const closeForm = () => {
  return {
    type: types.CLOSE_FORM
  }
}

//add task 
export const addTaskRequest = (task) => {
  return {
    type: types.ADD_TASK,
    task
  };
};
export const addTaskSuccess = (data) => {
  return {
    type: types.ADD_TASK_SUCCESS,
    data
  };
};
export const addTaskFail = (error) => {
  return {
    type: types.ADD_TASK_FAILURE,
    error
  }
}

//delete task
export const deleteTaskRequest = id => {
  return {
    type: types.DELETE_TASK,
    id
  };
};
export const deleteTaskSuccess = id => {
  return {
    type: types.DELETE_TASK_SUCCESS,
    id
  };
};
export const deleteTaskFail = error => {
  return {
    type: types.DELETE_TASK_FAILURE,
    error
  };
};

// set task editing 
export const setEditingRequest = (task) => {
  return {
    type: types.SET_EDITING,
    task
  };
};
export const setEditingSuccess = (task) => {
  return {
    type: types.SET_EDITING_SUCCESS,
    task
  };
};
export const setEditingFail = (error) => {
  return {
    type: types.SET_EDITING_FAILURE,
    error
  };
};

// edit task
export const updateTaskRequest = task => {
  return {
    type: types.UPDATE_TASK,
    task
  };
};
export const updateTaskSuccess = task => {
  return {
    type: types.UPDATE_TASK_SUCCESS,
    task
  };
};
export const updateTaskFail = error => {
  return {
    type: types.UPDATE_TASK_FAILURE,
    error
  };
};

// search 
export const searchTask = (keyword) => {
  return {
    type: types.SEARCH_TASK,
    keyword: keyword
  }
}
export const searchSuccess = (keyword) => {
  return {
    type: types.SEARCH_SUCCESS,
    keyword: keyword
  }
}
export const searchFail = () => {
  return {
    type: types.SEARCH_FAILURE,
  }
}

//sort 
export const sortTask = (sort) => {
  return {
    type: types.SORT_TASK,
    sort: sort,
  }
}
export const sortTastSuccess = (sort) => {
  return {
    type: types.SEARCH_SUCCESS,
    sort: sort,
  }
}
export const sortTaskFail = (sort) => {
  return {
    type: types.SEARCH_FAILURE,
    error: 'err'
  }
}