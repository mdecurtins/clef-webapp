import React from 'react';
import FlatEmbed from './FlatEmbed';
import FlatEmbedControls from './FlatEmbedControls';

export default class FlatEmbedContainer extends React.Component {

    render() {
        return (
            <div>
                <h3>Enter a query in the editor below:</h3>

                <FlatEmbed/>

                <FlatEmbedControls/>
            </div>
        );
    }
}
