import React, { Component } from 'react';
import './App.css';
import HomePage from './../Containers/HomePage/HomePage';
import TestPage from './../Containers/TestPage/TestPage';
import AboutUsPage from './../Containers/AboutUsPage/AboutUsPage';
import GlobalLayout from './../Containers/GlobalLayout/GlobalLayout';

class App extends Component {


    render() {
        return (
            <div className="App">
                <GlobalLayout>
                    {(currentPage) => {
                        console.log('currentPage = ', currentPage)
                        const showHomePage = currentPage === 'HomePage'
                        const showTestPage = currentPage === 'TestPage'
                        const showAboutPage = currentPage === 'AboutUsPage'
                        return (
                            <React.Fragment>

                                { showHomePage &&
                                    <HomePage />
                                }

                                { showTestPage &&
                                    <TestPage />
                                }

                                { showAboutPage && 
                                    <AboutUsPage />
                                }

                            </React.Fragment>
                        )
                    }}
                </GlobalLayout>
            </div>
        );
    }
}

export default App;
