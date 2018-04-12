import React, { Component } from 'react';
import './SearchResultRow.css';
import PropTypes from 'prop-types';
import LibraryRow from './LibraryRow'

class MilesLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxHeight: 488
        }
    }
    expandView() {
        if (this.state.maxHeight < 1440) {
            this.setState({ maxHeight: this.state.maxHeight + 448 });
        }
    }


    render() {
        if (typeof this.props.dataToDisplay === 'undefined' || this.props.dataToDisplay === null) {
            return (
                <header className="component-header">
                    Miles’s Melodious Music Miscellany
              </header>
            );
        } else {

            return (
                <div>
                    <header className="component-header">
                        Miles’s Melodious Music Miscellany <button onClick={() => this.expandView()}>Expand View </button>
                    </header>
                    <div className="component-search-results library-no-scroll" style={{ height: this.state.maxHeight }}>
                        {this.props.dataToDisplay.map((dataToDisplay) =>
                            <LibraryRow
                                key={dataToDisplay.trackId}
                                artistName={dataToDisplay.artistName}
                                collectionName={dataToDisplay.collectionName}
                                url={dataToDisplay.trackViewUrl}
                                image={dataToDisplay.artworkUrl100}
                                trackName={dataToDisplay.trackName}
                                genre={dataToDisplay.primaryGenreName}
                                releaseDate={dataToDisplay.releaseDate}
                            />
                        )}
                    </div>
                </div>
            );
        }
    }
}

MilesLibrary.propTypes = {
    dataToDisplay: PropTypes.array,
};
export default MilesLibrary;