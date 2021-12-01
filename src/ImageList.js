import React from 'react';
import './Image.css';

const ImageList = (props) => {
    var arrayOfImages = props.images.map((val) => {
        const {urls, description,id} = val;
        return <img src={urls.regular} alt={description} key={id} />
    })

    return (<div className="ui column grid Image-list">
        {arrayOfImages}
    </div>);
}
export default ImageList;