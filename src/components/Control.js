import React, { Component } from 'react';
import Search from './Search';

class Control extends Component {
    render() {
        return (

            <div className=" row  container-fluid ">
                <div className="col-lg-7 "><Search
                    onSearch={this.props.onSearch}
                /> </div>
                <div className=" col-lg-5 "> Sort </div>
            </div>

        );
    }
}
export default Control;