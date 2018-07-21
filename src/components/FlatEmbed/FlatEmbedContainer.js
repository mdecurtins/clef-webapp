import React from 'react';
import FlatEmbed from './FlatEmbed';
import FlatEmbedControls from './FlatEmbedControls';

export default class FlatEmbedContainer extends React.Component {

    render() {
        return (
            <div>
                <FlatEmbed/>
                <FlatEmbedControls/>
            </div>
        );
    }
}
