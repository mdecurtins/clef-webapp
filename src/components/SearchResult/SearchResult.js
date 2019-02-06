import React from 'react';
import SearchResultComposer from './partials/SearchResultComposer';
import SearchResultWork from './partials/SearchResultWork';

/**
 * Class to display a search result for a MIR query.
 *
 * @since 1.0.0
 */
export default class SearchResult extends React.Component {

    constructor( props ) {
        super( props );
        this.displayComposer = this.displayComposer.bind( this );
    }


    /**
     * Displays the composer information.
     *
     * @since 1.0.0
     * @return {*}
     */
    displayComposer() {
        if ( this.hasComposer() ) {
            return <SearchResultComposer composer={this.props.resultData.composer} />;
        }
    }


    /**
     * Displays the musical work information.
     *
     * @since 1.0.0
     * @return {*}
     */
    displayWork() {
        if ( this.hasWork() ) {
            return <SearchResultWork work={this.props.resultData.work} />;
        }
    }


    /**
     *
     * @since 1.0.0
     * @return {boolean}
     */
    hasComposer() {
        return this.props.resultData.hasOwnProperty( 'composer' ) && this.props.resultData.composer !== null;
    }


    /**
     *
     * @since 1.0.0
     * @return {boolean}
     */
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