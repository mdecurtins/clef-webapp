import React from 'react';
import Embed from 'flat-embed';
import './FlatEmbedStyles.css';

export default class FlatEmbed extends React.Component {

    componentDidMount() {
        // Create the Flat editor embed after the container has been rendered to the DOM.
        this.editor();
    }


    /**
     * Creates a container for a Flat.io embedded editor
     */
    editor() {
        const flatContainer = document.getElementById( 'flat-container' );

        let embed = new Embed( flatContainer, {
            embedParams: {
                appId: '5a3ac8f2f88679130280d7ab',
                mode: 'edit'
            }
        });

        embed.loadFlatScore( '5a9c6cea1a24f30e79374258' ).then( function () {

        }).catch( function ( err ) {
            // Did we fail to load the
            console.log( err );
        });
    }

    render() {
        return (
            <div>
                <h3>Enter a query in the editor below:</h3>
                <div id="flat-container"></div>
            </div>
        );
    }
}