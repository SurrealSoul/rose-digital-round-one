import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDone: true
        }
    }

    toggleSearch() {
        this.props.toggleSearch();
    }

    doneSearching() {
        this.props.doneSearch();
        this.setState({ isDone: !this.state.isDone })
    }

    render() {
        return (
            <header className="component-header">
                Weclome Miles <button onClick={() => this.toggleSearch()}> Toggle Search! </button>

                {this.state.isDone && <button onClick={() => this.doneSearching()}> DONE </button>}
            </header>
        );
    }
}
export default Header;