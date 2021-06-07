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
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srseach: term
                }
            });

            setResults(data.query.search);
        };
        
        if (term) {
            search();
        }
    }, [term]);

    const renderedResults = results.map((result) => {
        return(
            <div>
                <div key={result.pageid} className="item">
                    <div className="content">
                        <div className="header">
                            {result.title}
                        </div>
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    </div>
                </div>
                <div className="ui celled list">
                    {renderedResults}
                </div>
            </div>
        )
    })

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