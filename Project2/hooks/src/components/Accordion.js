import React, {Component, useState} from 'react';

class Accordion extends Component {

  state = {activeIndex: 0};

    constructor(props) {
        super(props)
    };

    onTitleClick = (index) => {
        this.setState({
          activeIndex: index,
        });
    };

    renderedItems() {
      return this.props.items.map((item, index) => {
        return (
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
      });
    }

    render() {
        return(
            <div className="ui styled accordion">
                {this.renderedItems()}
                <h1>{this.state.activeIndex}</h1>
            </div>
        );
    };
}

// const Accordion = ({ items }) => {

//   const [activeIndex, setActiveIndex] = useState(null);

//     const onTitleClick = (index) => {
//       setActiveIndex(index);
//     };
  
//     const renderedItems = items.map((item, index) => {
//       return (
//         <React.Fragment key={item.title}>
//           <div className="title active" onClick={() => onTitleClick(index)}>
//             <i className="dropdown icon"></i>
//             {item.title}
//           </div>
//           <div className="content active">
//             <p>{item.content}</p>
//           </div>
//         </React.Fragment>
//       );
//     });
  
//     return(
//       <div className="ui styled accordion">
//         {renderedItems}
//         <h1>{activeIndex}</h1>
//       </div>
//     );
//   };

export default Accordion;