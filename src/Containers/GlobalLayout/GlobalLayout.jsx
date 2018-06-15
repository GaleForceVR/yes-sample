import React, { Component } from 'react';
import './GlobalLayout.css';

class GlobalLayout extends Component {
    render() {
        return (
            <React.Fragment>
            
                <header className="App-header">
                  <img src="http://static1.squarespace.com/static/53712aa3e4b09a4c091eb1e3/t/545bf576e4b03b05c7e6206a/1528897215623/?format=1500w" className="App-logo" alt="logo" />
                </header>

                <div className="container">
                    {this.props.children}
                </div>

                <footer className="app-footer">

                </footer>

            </React.Fragment>
        )
    }
}

export default GlobalLayout;