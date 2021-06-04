import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';

// class Search extends Component {

//     state = {term: ''}

//     onInputChange = event => {
//         this.setState({term: event.target.value})
//     };

//     render() {
//         return(
//             <div>
//                 <div className="ui form">
//                     <div className="field">
//                         <label>Enter Search Term</label>
//                         <input 
//                              value={this.state.term}
//                              onChange={this.onInputChange}
//                             className="input"    
//                         />
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

const Search = () => {

    const [term, setTerm] = useState('');

    useEffect(() => {
        const search = async () => {
            await axios.get('asldkfj')
        };
        
        search();
    }, [term]);

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="input"    
                    />
                </div>
            </div>
        </div>
    )
}

export default Search;