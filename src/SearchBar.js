import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term : ''
        }
    }
    OnInputChange=(event)=>{
        this.setState({
            term : event.target.value
        });
    }
    OnFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.OnFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search   </label>
                        <input onChange={this.OnInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
