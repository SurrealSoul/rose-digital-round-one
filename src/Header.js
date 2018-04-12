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
                Weclome Miles <button className="toggle-button" onClick={() => this.toggleSearch()}> Toggle Search </button>

                {this.state.isDone && <button className="done-button" onClick={() => this.doneSearching()}> Done </button>}
            </header>
        );
    }
}
export default Header;