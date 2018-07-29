import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className="clef-header">
                <h2>Welcome to the Clef web application!</h2>
                <p>Instructions:</p>
                <ol>
                    <li>Select one or more algorithms to run.</li>
                    <li>Select one or more datasets to search.</li>
                    <li>Enter some music in the editor below, and click "Search".</li>
                    <li>See your results!</li>
                </ol>
            </div>
        );
    }
}