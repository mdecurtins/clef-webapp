import React from 'react';
import SearchResult from 'SearchResult';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchResultContainer extends React.Component {

    displayResults( results ) {
        results.map( function ( result ) {
           return (
               <SearchResult resultData={result} />
           );
        });
    }

    render() {
        return (
            <div id="search-results">
                {this.displayResults( this.props.results )}
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

export default connect( mapStateToProps, mapDispatchToProps )( SearchResultContainer );