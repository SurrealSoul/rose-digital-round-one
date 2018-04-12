import React, { Component } from 'react';
import './SearchResultRow.css';

class LibraryRow extends Component {
    render() {
        let formattedDate = this.props.releaseDate;
        formattedDate = formattedDate.substring(0, formattedDate.indexOf('T'));
        return (
            <div className="component-search-result-row">
                <img src={this.props.image} alt="Albumn" />
                <span className="title">
                    {this.props.artistName} - {this.props.trackName}
                    <br/>
                    Albumn: {this.props.collectionName}
                    <br />
                    Genre: {this.props.genre}
                    <br />
                    Released: {formattedDate}
                </span>
            </div>
        );
    }
}


export default LibraryRow;
