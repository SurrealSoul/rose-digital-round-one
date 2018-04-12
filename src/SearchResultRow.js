import React, { Component } from 'react';
import './SearchResultRow.css';

class SearchResultRow extends Component {
  constructor(props) {
    super(props);
    this.addedValues = [];
    this.state = {
      enteredIDs: {}
    }
  }
  bubbleUp(data) {
    if (this.addedValues.indexOf(data.trackID) > -1) {
      alert("This value has already been added")
    } else {
      this.props.addToLib(data);
      this.addedValues.push(data.trackID);
    }
  }

  render() {
    let formattedDate = this.props.releaseDate;
    formattedDate = formattedDate.substring(0, formattedDate.indexOf('T'));
    return (
      <div className="component-search-result-row" onClick={() => { this.bubbleUp(this.props) }}
      >
        <img src={this.props.image} alt="Albumn" />
        <span className="title">
          {this.props.artistName} - {this.props.trackName}
          <br />
          Albumn: {this.props.collectionName}
          <br />
          Genre: {this.props.genre}
          <br />
          Released: {formattedDate}
        </span>

        <span className="info">
          Click to add to libary!
        </span>
      </div>
    );
  }
}


export default SearchResultRow;
