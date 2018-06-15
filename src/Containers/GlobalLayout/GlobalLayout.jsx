import React, { Component } from 'react';
import './GlobalLayout.css';

class GlobalLayout extends Component {
    state = {
        currentPage: 'HomePage'
    }

    navigate = destination => e => {
        e.preventDefault()
        console.log('navigate fired')
        this.setState( { currentPage: destination } )
    }

    render() {
        const { children } = this.props
        const { currentPage } = this.state
        return (
            <React.Fragment>

                <header className="App-header">
                    <a href="home" onClick={this.navigate('HomePage')}>
                        <img src="http://static1.squarespace.com/static/53712aa3e4b09a4c091eb1e3/t/545bf576e4b03b05c7e6206a/1528897215623/?format=1500w" className="App-logo" alt="logo" />
                    </a>
                    <nav>
                        <a href="test-page" onClick={this.navigate('TestPage')}>Test Page</a>
                        <a href="About" onClick={this.navigate('AboutUsPage')}>About</a>
                        
                    </nav>
                </header>

                <div className="container">
                    { children( currentPage ) }
                </div>

                <footer className="app-footer">

                </footer>

            </React.Fragment>
        )
    }
}

export default GlobalLayout;