import React, { Component } from 'react';


class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {

        let { item, index } = this.props;
        var classLevel = item.level === 'hight' ? 'badge badge-success' : item.level === 'medium' ? 'badge badge-primary' : 'badge badge-secondary'
        return (
            <tr>
                <th >{index + 1}</th>
                <td colspan="3">{item.name}</td>
                <td colspan="4">{item.email}</td>
                <td colspan="2">
                    <span className={`label ${classLevel}`}>{item.level}</span>
                </td>
                <td colspan="2">
                    <button type="button" className="btn btn-warning btn-sm mr-2" onClick={() => this.props.onEdit(item)} >Edit</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(item)} >Delete</button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;