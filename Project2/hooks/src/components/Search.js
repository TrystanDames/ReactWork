import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';

// My own work first

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

// My work of video work

const Search = () => {

    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });

            setResults(data.query.search);
        };

       search();
    }, [term]);

    const renderedResults = results.map((result) => {
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        );
    });

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
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};


//Video work below

// const Search = () => {
//     const [term, setTerm] = useState('programming');
//     const [results, setResults] = useState([]);
  
//     useEffect(() => {
//       const search = async () => {
//         const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
//           params: {
//             action: 'query',
//             list: 'search',
//             origin: '*',
//             format: 'json',
//             srsearch: term,
//           },
//         });
  
//         setResults(data.query.search);
//       };
  
//       search();
//     }, [term]);
  
//     const renderedResults = results.map((result) => {
//       return (
//         <div key={result.pageid} className="item">
//           <div className="right floated content">
//             <a
//               className="ui button"
//               href={`https://en.wikipedia.org?curid=${result.pageid}`}
//             >
//               Go
//             </a>
//           </div>
//           <div className="content">
//             <div className="header">{result.title}</div>
//             <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
//           </div>
//         </div>
//       );
//     });
  
//     return (
//       <div>
//         <div className="ui form">
//           <div className="field">
//             <label>Enter Search Term</label>
//             <input
//               value={term}
//               onChange={(e) => setTerm(e.target.value)}
//               className="input"
//             />
//           </div>
//         </div>
//         <div className="ui celled list">{renderedResults}</div>
//       </div>
//     );
//   };

export default Search;