import React from 'react';
import SearchResult from './SearchResult';
import { connect } from 'react-redux';
import './SearchResultStyles.css';

class SearchResultContainer extends React.Component {

    displayResults() {
        const results = this.props.results;
        console.log( 'displayResults: logging results' );
        console.log( results );
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

function mapDispatchToProps( dispatch ) {
    
}

export default connect( mapStateToProps, null )( SearchResultContainer );