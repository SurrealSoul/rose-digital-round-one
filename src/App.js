import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';
import MilesLibrary from './milesLibrary';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredSearch: this.filterSearch('', 20),
      isLoaded: false,
      JSONdata: null,
      libraryJSON: [],
      isSearchInterface: false,
    }
  }

  toggleSearch() {
    this.setState({
      isSearchInterface: !this.state.isSearchInterface
    })
  }

  handleSearchChange = (event) => {
    this.setState({
      filteredSearch: this.filterSearch(event.target.value, 3)
    });
  }

  filterSearch(searchText, maxResults) {
    fetch("https://itunes.apple.com/search?term=" + searchText + "&limit=" + maxResults)
      .then(res => res.json())
      .then(
        (result) => {
          if (typeof result === 'undefined' || result.resultCount === 0) {
            return false;
          } else {
            return this.setState({ JSONdata: result });
          }
        },
        (error) => {
          this.setState({ JSONdata: null });;
        }
      )
  }

  addToLibrary(data) {
    //todo remove dupes if there would be any
    var newArray = this.state.libraryJSON.slice();
    newArray.push(data)
    this.setState({ libraryJSON: newArray });
  }

  doneSearch(){
    this.setState({isSearchInterface : false})
  }


  render() {
    return (
      <div>
        <Header
          toggleSearch={() => this.toggleSearch()}
          doneSearch={() => this.doneSearch()}
        />
        {this.state.isSearchInterface && <SearchInput
          textChange={this.handleSearchChange}
        />}

        {this.state.isSearchInterface && <SearchResult
          searchData={this.state.JSONdata}
          addToLib={(data) => this.addToLibrary(data)}
        />}

        <MilesLibrary
          dataToDisplay={this.state.libraryJSON}
        />
      </div>
    );
  }
}

export default App;
