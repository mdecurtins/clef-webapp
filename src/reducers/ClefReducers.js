import {actions} from "../actions/ClefActions";
import {combineReducers} from 'redux';

/**
 * Sets the array of algorithms and their properties that will be available for selection by the user.
 *
 * @since 1.0.0
 * @param {Array} state The current value of the algorithms key in the application state object.
 * @param {{type: string, payload: Array}} action The action on which to filter.
 * @return {Array}
 */
export const algorithms = function ( state = [], action ) {
    if ( action.type === actions.SET_ALGORITHMS ) {
        return action.payload;
    }
    return state;
};


/**
 * Sets the array of algorithms selected to be run when the user submits a query.
 *
 * @since 1.0.0
 * @param {Array} state The current value of the algorithmsSelected key in the application state object.
 * @param {{type: string, payload: object}} action The action on which to filter.
 * @return {Array}
 */
export const algorithmsSelected = function ( state = [], action ) {
    switch ( action.type ) {
        case actions.ADD_SELECTED_ALGORITHM:
            return [
                ...state,
                action.payload
            ];
        case actions.REMOVE_SELECTED_ALGORITHM:
            return state.filter(
                function ( alg ) {
                    return alg.index !== action.payload.index;
                }
            );

        default:
            return state;
    }
};


/**
 * Sets the array of checkboxes that allow selection of algorithms and datatests in the webapp controls.
 *
 * @since 1.0.0
 * @param {Array} state The current value of the checkboxes key in the application state object.
 * @param {{type: string, payload: object}} action The action on which to filter.
 * @return {Array}
 */
export const checkboxes = function ( state = [], action ) {
    switch ( action.type ) {
        case actions.ADD_CHECKBOX:
            let found = false;
            state.forEach( function ( c ) {
                if ( ! found && c.which === action.payload.which && c.index === action.payload.index ) {
                    found = true;
                }
            });
            if ( ! found ) {
                return [
                    ...state,
                    action.payload
                ];
            }
            return state;
        case actions.REMOVE_CHECKBOX:
            return state.filter(
                function ( c ) {
                    return ( c.which === action.payload.which && c.index === action.payload.index );
                }
            );
        case actions.CHANGE_CHECKBOX_STATE:
            return state.map(
                function ( c ) {
                    if ( c.which === action.payload.which && c.index === action.payload.index ) {
                        c.checked = ! c.checked;
                    }
                    return c;
                }
            );
        default:
            return state;
    }
};


/**
 * Sets the array of datasets and their properties that will be available for selection by the user.
 *
 * @since 1.0.0
 * @param {Array} state The current value of the datasets key in the application state object.
 * @param {{type: string, payload: Array}} action The action on which to filter.
 * @return {Array}
 */
export const datasets = function ( state = [], action ) {
    if ( action.type === actions.SET_DATASETS ) {
        return action.payload;
    }
    return state;
};


/**
 * Adds or removes a dataset name from the array of dataset names selected to add to a Clef API call.
 *
 * @since 1.0.0
 * @param {Array} state The current value of the datasetsSelected key in the application state object.
 * @param {{type: string, payload: string}} action The action on which to filter.
 * @return {Array}
 */
export const datasetsSelected = function ( state = [], action ) {
    switch ( action.type ) {
        case actions.ADD_SELECTED_DATASET:
            return [
                ...state,
                action.payload
            ];
        case actions.REMOVE_SELECTED_DATASET:
            return state.filter(
                function ( dset ) {
                    return dset !== action.payload;
                }
            );
        default:
            return state;
    }
};


/**
 * Adds or removes an error from the array of errors in the application state object.
 *
 * @since 1.0.0
 * @param {Array} state The current value of the errors key in the application state object.
 * @param {{type: string, payload: {index: number, message: string}}} action The action on which to filter.
 * @returns {Array}
 */
export const errors = function ( state = [], action ) {
    switch ( action.type ) {
        case actions.ADD_ERROR:
            return [
                ...state,
                action.payload
            ];
        case actions.CLEAR_ERROR:
            return state.filter(
                function ( message, i ) {
                    return i !== action.payload;
                }
            );
        default:
            return state;
    }
};


/**
 * Sets the array of facets that should be displayed in the left nav for filtering results.
 *
 * @since 1.0.0
 * @param {Array} state The current value of the facets key in the application state object.
 * @param {{type: string, payload: object|number}} action
 * @returns {Array}
 */
export const facets = function ( state = [], action ) {
    if ( action.type === actions.SET_FACETS ) {
        return action.payload;
    }
    return state;
};


/**
 * Sets whether or not the search results currently being displayed have been filtered.
 *
 * @since 1.0.0
 * @param {boolean} state The current value of the filtered key in the application state object.
 * @param {{type: string, payload: boolean}} action
 * @returns {boolean}
 */
export const filtered = function ( state = false, action ) {
    if ( action.type === actions.SET_FILTER_STATUS ) {
        return action.payload;
    }
    return state;
};


/**
 * Sets the array of search results after all filters have been applied.
 *
 * @since 1.0.0
 * @param {Array} state The current value of the filteredResults key in the application state object.
 * @param {{type: string, payload: Array}} action
 * @returns {Array}
 */
export const filteredResults = function ( state = [], action ) {
    if ( action.type === actions.SET_FILTERED_RESULTS ) {
        return action.payload;
    }
    return state;
};


/**
 * Sets the array of facet filters that should be applied to the raw search results to produce the filtered results.
 *
 * @since 1.0.0
 * @param {Array} state The current value of the filtersApplied key in the application state object.
 * @param {{type: string, payload: Array}} action
 * @returns {Array}
 */
export const filtersApplied = function ( state = [], action ) {
    if ( action.type === actions.SET_FILTERS ) {
        return action.payload;
    }
    return state;
};


/**
 * Stores the current instance of the Flat.io Embed object into the application state object.
 *
 * @since 1.0.0
 * @param {object|null} state The current value of the flatEmbed key in the application state object.
 * @param {{type: string, payload: object}} action
 * @returns {object|null}
 */
export const flatEmbed = function ( state = null, action ) {
    if ( action.type === actions.SET_FLAT_EMBED ) {
        return action.payload;
    }
    return state;
};


/**
 * Stores the data of the previous query submitted into the application state object.
 * 
 * @since 1.0.0
 * @param {string} state The current value of the previousQuery key in the application state object.
 * @param {{type: string, payload: string}} action
 * @returns {string}
 */
export const previousQuery = function ( state = "", action ) {
    if ( action.type === actions.SET_PREV_QUERY ) {
        return action.payload;
    }
    return state;
};


/**
 * Stores the results of a Clef query into the application state object.
 * 
 * @since 1.0.0
 * @param {Array} state The current value of the results key in the application state object.
 * @param {{type: string, payload: Array}} action An action object containing an array of result JSON objects.
 * @returns {Array}
 */
export const results = function ( state = [], action ) {
    if ( action.type === actions.SET_RESULTS ) {
        return action.payload;
    }
    return state;
};


/**
 * Sets whether or not a search is currently in progress.
 * 
 * @since 1.0.0
 * @param {boolean} state The current value of the searching key in the application state object.
 * @param {{type: string, payload: boolean}} action
 * @returns {boolean}
 */
export const searching = function ( state = false, action ) {
    if ( action.type === actions.SET_SEARCHING ) {
        return true;
    }
    return state;
};


/**
 * Sets the current view state of the search results element within the Clef web application.
 *
 * @since 1.0.0
 * @param {number} state The current value of the view key in the application state object.
 * @param {{type: string, payload: number}} action
 * @returns {number}
 */
export const view = function ( state = 0, action ) {
    if ( action.type === actions.SET_RESULTS_VIEW ) {
        return parseInt( action.payload );
    }
    return state;
};


export default combineReducers({
    algorithms,
    algorithmsSelected,
    checkboxes,
    datasets,
    datasetsSelected,
    errors,
    facets,
    filtered,
    filteredResults,
    filtersApplied,
    flatEmbed,
    previousQuery,
    results,
    searching,
    view
});