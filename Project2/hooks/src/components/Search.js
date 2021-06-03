import React, {Component} from 'react';

class Search extends Component {

    state = {term: ''}

    onInputChange = event => {
        this.setState({term: event.target.value})
    };

    render() {
        return(
            <div>
                <div className="ui form">
                    <div className="field">
                        <label>Enter Search Term</label>
                        <input 
                             value={this.state.term}
                             onChange={this.onInputChange}
                            className="input"    
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;