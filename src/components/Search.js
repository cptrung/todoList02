import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    //có giá trị đẩy ra app .
    onSearch = () => {
        // console.log(this.state) ;
        this.props.onSearch(this.state.keyword);
    }
    render() {
        var { keyword } = this.state;
        return (
            <div className="input-group">
                <input
                    name="keyword"
                    type="text"
                    className="form-control"
                    placeholder="Nhập từ khóa..."
                    value={keyword}
                    onChange={this.onChange}
                />
                <button className="btn btn-primary" type="button" onClick={() => this.props.onSearch(this.state.keyword)}>
                    Search
                </button>

            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {};
};
// chỉ cần push giá trị lên store k cần map giá lên store 
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (keyword) => {
            dispatch(actions.SearchTask(keyword));
        }

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search); 