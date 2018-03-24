import React from 'react';

export default class SearchResult extends React.Component {

    constructor( props ) {
        super( props );
    }

    displayComposer() {
        if ( this.hasComposer() ) {
            let composer = this.props.resultData.composer;
            this.displayComposerName( composer );
            this.displayComposerDates( composer );
        }
    }

    displayComposerName( composer ) {
        if ( composer.name ) {
            return ( <p className="composer-name">{composer.name}</p> );
        }
    }

    displayComposerDates( composer ) {
        if ( composer.dates ) {
            return (
                <p className="composer-dates">{composer.dates.born}&ndash;{composer.dates.died}</p>
            );
        }
    }


    hasComposer() {
        return ( this.props.resultData.composer !== null );
    }

    render() {
        return (
            <div className="clef-result">
                { this.displayComposer() }
            </div>
        );
    }
}