import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.state = {term: ''};
    }
   
    // Searches Spotify library
    search() {
        this.props.onSearch(this.state.term);
    }

    // Sets name of playlist
    handleTermChange(event) {
        this.setState({term: event.target.value});
    }
   
    // Listens for enter key press. Inititates search of Spotify library
    handleKeyPress(event) {
        if(event.key === 'Enter') {
            this.props.onSearch(this.state.term);
        }
    }

    // Renders the input box to search for music
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyPress={this.handleKeyPress}/>
                <a onClick={this.search}>SEARCH</a>
            </div>
        )
    }
}

export default SearchBar;