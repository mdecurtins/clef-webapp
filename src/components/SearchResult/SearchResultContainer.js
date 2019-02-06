import React from 'react';
import SearchResult from './SearchResult';
import { connect } from 'react-redux';
import './SearchResultStyles.css';

/**
 * Container class for search results for a MIR query.
 *
 * @since 1.0.0
 */
class SearchResultContainer extends React.Component {


    /**
     * Display the results, ordered by ranking.
     *
     * @since 1.0.0
     * @return {*}
     */
    displayResults() {
        const results = this.props.results;
        return results.map( function ( result ) {
           return (
               <SearchResult key={result.ranking} resultData={result} idx={result.ranking} />
           );
        });
    }

    render() {
        return (
            <div id="search-results">
                {this.displayResults()}
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        errors: state.errors,
        results: state.results,
        view: state.view
    };
}

export default connect( mapStateToProps, null )( SearchResultContainer );