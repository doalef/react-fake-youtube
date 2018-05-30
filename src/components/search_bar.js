import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    onInputChange(term) {
        this.props.onSearchTermChange(term)
        this.setState({ term });
    }

    render() {
        return <div className="search-bar"><input placeholder={'search your video...'} onChange={(event) => this.onInputChange(event.target.value)} /></div>
    }
}