/**
 * Action creators.
 * @type {{ADD_ERROR: string, CLEAR_ALL_ERRORS: string, CLEAR_ERROR: string, CLEAR_FILTERED_RESULTS: string, CLEAR_FILTERS: string, CLEAR_RESULTS: string, SET_FACETS: string, SET_FILTERED_RESULTS: string, SET_FILTERS: string, SET_FILTER_STATUS: string, SET_FLAT_EMBED: string, SET_PREV_QUERY: string, SET_RESULTS: string, SET_RESULTS_VIEW: string, SET_SEARCHING: string}}
 */
export const actions = {
    ADD_ERROR: 'ADD_ERROR',
    CLEAR_ALL_ERRORS: 'CLEAR_ALL_ERRORS',
    CLEAR_ERROR: 'CLEAR_ERROR',
    CLEAR_FILTERED_RESULTS: 'CLEAR_FILTERED_RESULTS',
    CLEAR_FILTERS: 'CLEAR_FILTERS',
    CLEAR_RESULTS: 'CLEAR_RESULTS',
    SET_FACETS: 'SET_FACETS',
    SET_FILTERED_RESULTS: 'SET_FILTERED_RESULTS',
    SET_FILTERS: 'SET_FILTERS',
    SET_FILTER_STATUS: 'SET_FILTER_STATUS',
    SET_FLAT_EMBED: 'SET_FLAT_EMBED',
    SET_PREV_QUERY: 'SET_PREV_QUERY',
    SET_RESULTS: 'SET_RESULTS',
    SET_RESULTS_VIEW: 'SET_RESULTS_VIEW',
    SET_SEARCHING: 'SET_SEARCHING'
};


/**
 * View constants. These describe the view state of the search results element.
 * @type {{EMPTY: number, ERROR: number, HAVE_RESULTS: number, NO_RESULTS: number}}
 */
export const views = {
    EMPTY: 0,
    ERROR: 1,
    HAVE_RESULTS: 2,
    NO_RESULTS: 3
};


/**
 * Action to add an error.
 *
 * @since 1.0.0
 * @param {string} msg The error message to be displayed.
 * @returns {{type: string, payload: string}}
 */
export const addError = function ( msg ) {
    return {
        type: actions.ADD_ERROR,
        payload: msg
    };
};


/**
 * Action to clear all errors.
 *
 * @since 1.0.0
 * @returns {{type: string, payload: Array}}
 */
export const clearAllErrors = function () {
    return {
        type: actions.CLEAR_ALL_ERRORS,
        payload: []
    }
};


/**
 * Action to clear the error at errIndex.
 *
 * @since 1.0.0
 * @param {number} errIndex The index in the application store's errors[] array of the error to be cleared.
 * @returns {{type: string, payload: number}}
 */
export const clearError = function ( errIndex ) {
    return {
        type: actions.CLEAR_ERROR,
        payload: errIndex
    };
};


/**
 * Action to clear all filtered results.
 *
 * @since 1.0.0
 * @returns {{type: string, payload: Array}}
 */
export const clearFilteredResults = function () {
    return {
        type: actions.CLEAR_FILTERED_RESULTS,
        payload: []
    };
};


/**
 * Action to store the current Flat.io Embed instance into the application state object.
 *
 * @since 1.0.0
 * @param {object} embed The instance of the Flat.io Embed to store into the application state object.
 * @returns {{type: string, payload: object}}
 */
export const flatEmbed = function ( embed ) {
    return {
        type: actions.SET_FLAT_EMBED,
        payload: embed
    };
};


/**
 * Action to store the previously executed query into the application state object.
 *
 * @since 1.0.0
 * @param {string|object} query The last query that was executed.
 * @returns {{type: string, payload: string|object}}
 */
export const previousQuery = function ( query ) {
    return {
        type: actions.SET_PREV_QUERY,
        payload: query
    };
};


/**
 * Action to set whether or not a search is currently being executed.
 *
 * @since 1.0.0
 * @param {boolean} searching
 * @returns {{type: string, payload: boolean}}
 */
export const searching = function ( searching = false ) {
    return {
        type: actions.SET_SEARCHING,
        payload: searching
    };
};


/**
 * Action to set whether or not the currently displayed search results have been filtered.
 *
 * @since 1.0.0
 * @param {boolean} filtered
 * @returns {{type: string, payload: boolean}}
 */
export const setFilterStatus = function ( filtered ) {
    return {
        type: actions.SET_FILTER_STATUS,
        payload: filtered
    };
};


/**
 * Action to set the results array of a Clef search.
 *
 * @since 1.0.0
 * @param {Array} results
 * @returns {{type: string, payload: Array}}
 */
export const setResults = function ( results ) {
    return {
        type: actions.SET_RESULTS,
        payload: results
    };
};


/**
 * Action to set the view state of the search results element.
 *
 * @since 1.0.0
 * @param {number} value
 * @returns {{type: string, payload: number}}
 */
export const view = function ( value ) {
    let val = ( typeof value === 'number' ) ? value : parseInt( value );
    if ( val !== views.EMPTY && val !== views.ERROR && val !== views.HAVE_RESULTS && val !== views.NO_RESULTS ) {
        addError( 'Invalid view value passed to setResultsView().' );
        val = views.ERROR;
    }
    return {
        type: actions.SET_RESULTS_VIEW,
        payload: val
    };
};


/*** Thunks ***/

/**
 *
 * @param {Embed} flatEditor
 * @returns {Function}
 */
export const getMusicData = function ( flatEditor ) {
    return function ( dispatch ) {
        if ( flatEditor === null || typeof flatEditor === 'undefined' ) {
            dispatch( addError( 'Flat Embed instance is either null or undefined.' ) );
        } else {
            console.log( 'Attempting to get MusicXML...' );
            flatEditor.getMusicXML()
                .then( function ( xml ) {
                    console.log( 'Got MusicXML: ' );
                    console.log( xml );
                    dispatch( previousQuery( xml ) );
                })
                .catch( function ( err ) {
                    /** @var {Error} err */
                    console.log( 'An error occurred.' );
                    dispatch( addError( err.message ) );
                });
        }
    };
};


export const fetchResults = function () {
    return function ( dispatch, getState ) {
        fetch(  '../sample_data/sample_data.json', {
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'} } )
            .then( function ( response ) {
                console.log( 'Got a response, returning json...' );
                console.log( response );
                return response.json();
            })
            .then( function ( json ) {
                console.log( 'Logging results...' );
                console.log( json );
            })
            .catch( function ( err ) {
                console.log( 'Error occurred.' );
                console.log( err );
            });
    };
};




