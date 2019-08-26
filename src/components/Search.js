import React, { Component } from 'react';
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
                <button className="btn btn-primary" type="button"
                    onClick={this.onSearch}> Clear </button>
            </div>

        );
    }

}
export default Search; 