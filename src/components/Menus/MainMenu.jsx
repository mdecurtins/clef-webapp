import React from 'react';
import './MainMenu.css';
import FaGithub from 'react-icons/lib/fa/github';

/**
 * Class for the main menu.
 *
 * @since 1.0.0
 */
export default class MainMenu extends React.Component {
    render() {
        return(
            <div className="App-main-menu">
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Documentation</a>
                    <a href="#"><FaGithub/> GitHub</a>
                </nav>
            </div>
        );
    }
}