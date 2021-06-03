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
      const active = this.index === this.activeIndex ? 'active' : '';
      return this.props.items.map((item, index) => {
        return (
          <React.Fragment key={item.title}>
              <div
                className={"title " + active}
                onClick={() => this.onTitleClick(index)}
              >
                <i className="dropdown icon"></i>
                {item.title}
              </div>
              <div className={"content " + active}>
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
//       const active = index === activeIndex ? 'active' : '';
//       return (
//         <React.Fragment key={item.title}>
//           <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
//             <i className="dropdown icon"></i>
//             {item.title}
//           </div>
//           <div className={`content ${active}`}>
//             <p>{item.content}</p>
//           </div>
//         </React.Fragment>
//       );
//     });
  
//     return(
//       <div className="ui styled accordion">
//         {renderedItems}
//       </div>
//     );
//   };

export default Accordion;