import React from 'react';
import Embed from 'flat-embed';
import './FlatEmbedStyles.css';
import { connect } from 'react-redux';
import { flatEmbed } from "../../actions/ClefActions";


class FlatEmbed extends React.Component {


    componentDidMount() {
        // Create the Flat editor embed after the container has been rendered to the DOM.
        this.embed = this.getEmbed();
        this.editor();

        // Dispatch an action to store the Flat Embed object instance in the application state.
        this.props.setFlatEmbed( this.embed );
    }

    /**
     * Creates a container for a Flat.io embedded editor
     */
    editor() {

        this.embed.loadFlatScore( '5a9c6cea1a24f30e79374258' ).then( function () {
            // Success.
        }).catch( function ( err ) {
            // Failure.
            console.log( err );
        });
    }

    getEmbed() {
        const flatContainer = document.getElementById( 'flat-container' );

        if ( typeof this.embed !== 'undefined' ) {
            return this.embed;
        }

        return new Embed( flatContainer, {
            embedParams: {
                appId: '5a3ac8f2f88679130280d7ab',
                mode: 'edit'
            }
        });
    }

    render() {
        // Render a container and embed the Flat.io editor after this component mounts.
        return (
            <div id="flat-container"></div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        view: state.view
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        setFlatEmbed: function ( embed ) {
            dispatch( flatEmbed( embed ) );
        }
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( FlatEmbed );