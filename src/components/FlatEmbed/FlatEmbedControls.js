import React from 'react';

class FlatEmbedControls extends React.Component {

    constructor( props ) {
        super ( props );
    }

    render() {
        return (
            <div id="clef-search-controls">
                <a href="#" className="clef-clear-search action-button" onClick={}>Clear</a>
                <a href="#" className="clef-submit-search action-button" onClick={}>Search</a>
            </div>
        );
    }
}