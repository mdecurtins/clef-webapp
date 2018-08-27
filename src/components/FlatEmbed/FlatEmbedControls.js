import React from 'react';
import { connect } from 'react-redux';
import './FlatEmbedStyles.css';
import ClefUtility from '../../utils/ClefUtility';
import {
    clearAllErrors,
    clearFilteredResults, execRequest,
    fetchResults,
    fetchTestErrors,
    getMusicData,
    previousQuery,
    searching,
    setResults,
    view,
    views
} from "../../actions/ClefActions";

class FlatEmbedControls extends React.Component {

    clearQuery() {

    }

    render() {
        return (
            <div id="clef-search-controls">
                <button className="clef-clear-search action-button" onClick={this.clearQuery.bind( this )}>Clear</button>
                <button className="clef-submit-search action-button" onClick={this.submitQuery.bind( this )}>Search</button>
            </div>
        );
    }

    submitQuery() {
        // Set searching status.
        this.props.setSearchingStatus( true );

        // Set search results view status to empty.
        this.props.setViewStatus( views.EMPTY );

        // Clear any currently set errors.
        this.props.clearErrors();

        // Clear any currently set filtered results.
        this.props.clearFilteredResults();

        // Get the current data in the Flat Embed as MusicXML and store it as the previous query.
        //this.props.getMusic( this.props.flatEditor );
        this.props.doSearch( this.props.flatEditor, this.props.selectedAlgorithms, this.props.selectedDatasets );
    }

    testFetchData() {
        this.props.testData();
    }

    testFetchErrors() {
        this.props.testErrors();
    }
}


/**
 * Gets any values this component needs from the application state store and maps them to keys in this.props
 *
 * @since 1.0.0
 * @param state The application state object as returned by Redux store's getState() method
 * @returns {{flatEmbed: *|flatEmbed}}
 */
function mapStateToProps( state ) {
    return {
        selectedAlgorithms: state.algorithmsSelected,
        selectedDatasets: state.datasetsSelected,
        flatEditor: state.flatEmbed,
        query: state.previousQuery
    };
}


/**
 * Maps action creator functions to functions available in this component's this.props
 *
 * @since 1.0.0
 * @since
 * @param dispatch The Redux store's dispatch() method
 * @returns {{setPreviousQuery: previousQuery, setSearchingStatus: false}}
 */
function mapDispatchToProps( dispatch ) {
    return {
        clearErrors: function() {
            dispatch( clearAllErrors() );
        },

        clearFilteredResults: function () {
            dispatch( clearFilteredResults() );
        },

        doSearch: function( flatEditor, selectedAlgorithms, selectedDatasets ) {
            dispatch( execRequest( flatEditor, selectedAlgorithms, selectedDatasets ) );
        },

        getMusic: function ( flatEditor ) {
            dispatch( getMusicData( flatEditor ) );
        },

        setPreviousQuery: function( prevQuery ) {
            dispatch( previousQuery( prevQuery ) );
        },

        setSearchingStatus: function ( currentlySearching ) {
            dispatch( searching( currentlySearching ) );
        },

        setViewStatus: function ( viewStatus ) {
            dispatch( view( viewStatus ) );
        },

        testData: function () {
            dispatch( fetchResults() );
        },

        testErrors: function () {
            dispatch( fetchTestErrors() );
        }
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( FlatEmbedControls );