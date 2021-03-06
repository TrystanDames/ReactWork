import React, {Component} from 'react';

class ImageList extends Component {

    constructor(props) {
        super(props)
    };

    render(){
        const images = this.props.images.map(({description, id, urls}) => {
            return(
                <img alt={description} key={id} src={urls.regular} />
            );
        });
         
        return(
            <div>
                {images}
            </div>
        )
    };
}

export default ImageList;