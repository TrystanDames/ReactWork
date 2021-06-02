import React, {Component} from 'react';

class Accordion extends Component {

    constructor(props) {
        super(props)
    };

    onTitleClick() {
        console.log('Title clicked')
    };

    render() {
        
        const renderedItems = this.props.items.map(({item, index}) => {
            return(
                <React.Fragment key={item.title}>
                    <div
                        className="title active"
                        onClick={() => this.onTitleClick(index)}
                    >
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                    <div className="content active">
                        <p>{item.content}</p>
                    </div>
                </React.Fragment>
            );
        })

        return(
            <div className="ui styled accordion">
                {renderedItems}
            </div>
        );
    };
}

export default Accordion;