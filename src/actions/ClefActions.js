/**
 *
 * @type {{ADD_ERROR: string, CLEAR_ALL_ERRORS: string, CLEAR_ERROR: string, CLEAR_FILTERED_RESULTS: string, CLEAR_FILTERS: string, CLEAR_RESULTS: string, SET_ALGORITHMS: string, SET_DATASETS: string, SET_FACETS: string, SET_FILTERED_RESULTS: string, SET_FILTERS: string, SET_FILTER_STATUS: string, SET_FLAT_EMBED: string, SET_PREV_QUERY: string, SET_RESULTS: string, SET_RESULTS_VIEW: string, SET_SEARCHING: string}}
 */
export const actions = {
    ADD_ERROR: 'ADD_ERROR',
    CLEAR_ALL_ERRORS: 'CLEAR_ALL_ERRORS',
    CLEAR_ERROR: 'CLEAR_ERROR',
    CLEAR_FILTERED_RESULTS: 'CLEAR_FILTERED_RESULTS',
    CLEAR_FILTERS: 'CLEAR_FILTERS',
    CLEAR_RESULTS: 'CLEAR_RESULTS',
    SET_ALGORITHMS: 'SET_ALGORITHMS',
    SET_DATASETS: 'SET_DATASETS',
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
 * Action to clear all filters.
 *
 * @since 1.0.0
 * @return {{type: string, payload: Array}}
 */
export const clearFilters = function () {
    return {
        type: actions.CLEAR_FILTERS,
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
 * Creates a new Facet object.
 *
 * @since 1.0.0
 * @param {string} group The header under which this facet should be grouped.
 * @param {string} label The label text that should be displayed next to the facet checkbox in the faceted search form.
 * @param {string} value The value that should be used to filter the search results.
 * @return {{facet_group: string, facet_num_matches: number, facet_label: string, facet_value: string}}
 */
const newFacet = function ( group = "", label = "", value = "" ) {
    return {
        "facet_group": group,
        "facet_num_matches": 1,
        "facet_label": label,
        "facet_value": value
    };
};


/**
 * Updates a Facet object's number of matches if the facet exists; adds the facet if it does not.
 *
 * @since 1.0.0
 * @param {Array} facets The array of facets to be stored in application state.
 * @param {string} group The header under which this facet should be grouped.
 * @param {string} value The value that should be used to filter the search results, also used here to match an existing
 *  facet.
 * @return {Array} The mutated array of facets to be stored in application state.
 */
const updateFacet = function ( facets, group, value ) {
    if ( facets.length === 0 ) {
        facets.push( newFacet( group, value, value ) );
    } else {
        let found = false;
        for ( let i = 0; i < facets.length; i++ ) {
            if ( facets[i].facet_value === value ) {
                found = true;
                facets[i].facet_num_matches++;
            }
        }
        if ( ! found ) {
            facets.push( newFacet( group, value, value ) );
        }
    }
    return facets;
};


/**
 * Action to set available algorithms.
 *
 * @since 1.0.0
 * @param {Array} algorithms The array of algorithm properties returned by calling the Clef REST API.
 * @return {{type: string, payload: Array}}
 */
export const setAlgorithms = function ( algorithms = [] ) {
    return {
        type: actions.SET_ALGORITHMS,
        payload: algorithms
    };
};


/**
 * Action to set available datasets.
 *
 * @since 1.0.0
 * @param {Array} datasets The array of dataset properties returned by calling the Clef REST API.
 * @return {{type: string, payload: Array}}
 */
export const setDatasets = function ( datasets = [] ) {
    return {
        type: actions.SET_DATASETS,
        payload: datasets
    };
};


/**
 * Builds an array of Facet objects from the facetable properties of the search results and sets it as the action payload.
 *
 * @since 1.0.0
 * @param {Array} searchResults The array of search results returned by the server.
 * @return {{type: string, payload: Array}}
 */
export const setFacets = function ( searchResults = [] ) {
    let facets = [];
    if ( Array.isArray( searchResults ) && searchResults.length > 0 ) {
        searchResults.forEach( function ( result ) {
            if ( result.hasOwnProperty( 'work') ) {
                if ( result.work.hasOwnProperty( 'era') && result.work.era !== '' ) {
                    facets = updateFacet( facets, 'Era', result.work.era );
                }
                if ( result.work.hasOwnProperty( 'type' ) && result.work.type !== '' ) {
                    facets = updateFacet( facets, 'Type', result.work.type );
                }
            }
            if ( result.hasOwnProperty( 'tags') && Array.isArray( result.tags ) && result.tags.length > 0 ) {
                result.tags.forEach( function ( tag ) {
                    facets = updateFacet( facets, 'Tags', tag );
                });
            }
        });
    }
    return {
        type: actions.SET_FACETS,
        payload: facets
    };
};


/**
 * Action to set filters that should be applied to the current search results.
 *
 * @since 1.0.0
 * @param {Array} filters An array of facet objects whose values should be used to filter the current search results.
 * @return {{type: string, payload: Array}}
 */
export const setFilters = function ( filters = [] ) {
    return {
        type: actions.SET_FILTERS,
        payload: filters
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


/**
 * Test function to fetch sample data.
 *
 * @return {Function}
 */
export const fetchResults = function () {
    return function ( dispatch, getState ) {
        fetch(  '/sample_data/sample_data.json', {
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'} } )
            .then( function ( response ) {
                console.log( 'Got a response, returning json...' );
                console.log( response );
                return response.json();
            })
            .then( function ( json ) {
                console.log( 'Logging results...' );
                console.log( json );
                dispatch( setResults( json ) );
                dispatch( setFacets( json ) );
            })
            .catch( function ( err ) {
                console.log( 'Error occurred.' );
                console.log( err );
            });
    };
};


/**
 * Test function to fetch sample errors from the Clef REST API
 *
 * @return {Function}
 */
export const fetchTestErrors = function () {
    return function ( dispatch, getState ) {
        fetch( '/test/error', {
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'} } )
            .then( function ( response ) {
            console.log( 'Got a response!' );
            console.log( response );
            return response.json();
        }).then( function ( json ) {
            console.log( 'Got JSON' );
            console.log( json );
        }).catch( function ( err ) {
            console.log( 'Error while trying to fetch test errors.' );
            console.log( err );
        });
    };
};




