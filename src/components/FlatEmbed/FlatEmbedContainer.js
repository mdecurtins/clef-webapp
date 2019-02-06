import React from 'react';
import FlatEmbed from './FlatEmbed';
import FlatEmbedControls from './FlatEmbedControls';

/**
 * Container class for the Flat.io embedded music notation editor.
 *
 * @since 1.0.0
 */
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
