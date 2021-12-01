import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import ImageList from './ImageList';


class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            result : []
        }
    }
    onSearchSubmit = (value) => {
        var resp = null;
        // console.log("This is inside App : " + value);
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: value },
            headers: {
                Authorization: 'Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296'
            }
        }).then((val) => {
            resp = val.data.results;
            this.setState({
                result :val.data.results
            })
            // console.log(resp);
            // console.log("This is : "+this.state.result);
        }).catch((err) => {
            console.log(err);
        });
    }


    render(){
        return (
            <div className="ui container">
                <h1>Image Search App</h1>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.result}/>
            </div>
        );
    }
}
export default App;