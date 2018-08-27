import React from 'react';
import SearchResultComposer from './partials/SearchResultComposer';
import SearchResultWork from './partials/SearchResultWork';

export default class SearchResult extends React.Component {

    constructor( props ) {
        super( props );
        console.log( 'SearchResult created.' );
        this.displayComposer = this.displayComposer.bind( this );
    }

    displayComposer() {
        if ( this.hasComposer() ) {
            return <SearchResultComposer composer={this.props.resultData.composer} />;
        }
    }

    displayWork() {
        if ( this.hasWork() ) {
            return <SearchResultWork work={this.props.resultData.work} />;
        }
    }

    hasComposer() {
        return this.props.resultData.hasOwnProperty( 'composer' ) && this.props.resultData.composer !== null;
    }

    hasWork() {
        return this.props.resultData.hasOwnProperty( 'work' ) && this.props.resultData.work !== null;
    }

    render() {
        return (
            <div className="clef-result">
                <div className="clef-result-rank">
                    <p>{this.props.idx}.</p>
                </div>
                <div className="clef-result-content">
                    { this.displayWork() }
                    { this.displayComposer() }
                </div>
            </div>
        );
    }
}