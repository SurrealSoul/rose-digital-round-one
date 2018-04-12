import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchResultRow from './SearchResultRow';
import './SearchResultRow.css';

class SearchResult extends Component {
    addToLib(data) {
        this.props.addToLib(data);
    }

    render() {
        if (typeof this.props.searchData === 'undefined' || this.props.searchData === null) {
            return (
                <div className="component-search-result-row">No Results Found</div>
            )
        } else {
            return (
                <div className="component-search-results noScroll">
                    {this.props.searchData.results.map((searchData) =>
                        <SearchResultRow
                            key={searchData.trackId}
                            artistName={searchData.artistName}
                            collectionName={searchData.collectionName}
                            url={searchData.trackViewUrl}
                            image={searchData.artworkUrl100}
                            trackName={searchData.trackName}
                            genre={searchData.primaryGenreName}
                            releaseDate={searchData.releaseDate}
                            addToLib={() => this.addToLib(searchData)}
                        />
                    )}
                </div>
            );
        }

    }
}

SearchResult.propTypes = {
    searchData: PropTypes.object,
};

export default SearchResult;