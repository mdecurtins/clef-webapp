import React from 'react';
import {connect} from 'react-redux';
import {
    addCheckbox,
    addSelectedDataset,
    changeCheckboxState,
    removeCheckbox,
    removeSelectedDataset
} from "../../actions/ClefActions";

/**
 * Class to display a single dataset of symbolic music data.
 *
 * @since 1.0.0
 */
class Dataset extends React.Component {

    constructor( props ) {
        super( props );

        // Bind instance methods.
        this.deselectDataset.bind( this );
        this.displayCapabilities.bind( this );
        this.displayDatasetSelect.bind( this );
        this.getCheckbox.bind( this );
        this.makeCheckboxObject.bind( this );
        this.selectDataset.bind( this );
    }


    /**
     * Fires after the component's initial DOM render.
     *
     * @since 1.0.0
     */
    componentDidMount() {
        let cbox = this.makeCheckboxObject();
        this.props.pushCheckbox( cbox );
    }


    /**
     * Dispatches an action to remove this Dataset from the datasetsSelected key in the Redux state.
     *
     * @since 1.0.0
     */
    deselectDataset() {
        let attrs = this.props.dset.datasetAttributes;
        this.props.deselect( attrs.name );
    }


    /**
     * Gets the HTML for displaying the monophonic/polyphonic capabilities of this Dataset.
     *
     * @since 1.0.0
     * @param {object} caps
     * @return {Array}
     */
    displayCapabilities( caps ) {
        let retval = [];
        retval.push( <p>Monophonic: {( caps.monophonicData ) ? "true" : "false"}</p> );
        retval.push( <p>Polyphonic: {( caps.polyphonicData ) ? "true" : "false"}</p> );
        return retval;
    }


    /**
     * Gets the HTML to display the checkbox that allows this Dataset to be selected by the user.
     *
     * @since 1.0.0
     * @return {*}
     */
    displayDatasetSelect() {
        // Get the attributes of this Dataset.
        let attrs = this.props.dset.datasetAttributes;

        let checkbox = this.getCheckbox();

        // Default value, for the initial render of the component before componentDidMount fires.
        let checked = false;

        // Because the checkbox to select this Dataset will only be pushed to state after the component mounts, it
        // will only exist after that point.
        if ( checkbox !== null && typeof checkbox !== 'undefined' ) {
            checked = checkbox.checked;
        }

        // HTML for a single checkbox.
        return (
            <div className="clef-dataset-select">
                <input type="checkbox"
                       id={"select-" + attrs.name}
                       value={attrs.name}
                       checked={checked}
                       onChange={this.handleDatasetSelect.bind(this)}/>
                <label htmlFor={"select-" + attrs.name}>{attrs.displayName}</label>
            </div>
        );
    }


    /**
     * Gets the checkbox that belongs to this Dataset component instance.
     *
     * This checkbox is the one that controls whether this Dataset is currently selected by the user to be sent to the
     * Clef API when the "Search" button is clicked. There should ever only be one of these checkboxes per
     * Dataset.
     *
     * @since 1.0.0
     * @return {object | null} the checkbox that belongs to this instance, or null if none/2+ checkboxes found.
     */
    getCheckbox() {
        let retval = null;
        let index = this.props.position;
        let cbox = this.props.cboxes.filter(
            function ( c ) {
                return ( c.which === 'dataset' && c.index === index );
            }
        );
        if ( cbox.length === 1 ) {
            retval = cbox[0];
        }
        return retval;
    }


    /**
     * Changes the checked state of the selection checkbox associated with this Dataset component instance.
     *
     * Also dispatches an action to add this Dataset to the datasetsSelected key in the Redux application
     * state object.
     *
     * @since 1.0.0
     */
    handleDatasetSelect() {
        // Get this component's checkbox from the Redux state.
        let cbox = this.getCheckbox();

        // Dispatch a changeCheckboxState action on this checkbox.
        this.props.changeCheckbox( cbox );

        // Get the updated checkbox from state.
        cbox = this.getCheckbox();

        // If our new checkbox state is checked, add this Dataset to the datasetsSelected key.
        if ( cbox.checked === true ) {
            this.selectDataset();
        } else {
            // Otherwise, remove it from the datasetsSelected key.
            this.deselectDataset();
        }
    }


    /**
     * Makes an initial checkbox object to pass to the Redux store.
     *
     * @since 1.0.0
     * @return {{which: string, index: number | string, checked: boolean}}
     */
    makeCheckboxObject() {
        return {
            which: "dataset",
            index: this.props.position,
            checked: false
        };
    }


    /**
     * Dispatches an action to add the name of this dataset to the datasetsSelected key in the Redux state.
     *
     * @since 1.0.0
     */
    selectDataset() {
        let attrs = this.props.dset.datasetAttributes;
        this.props.select( attrs.name );
    }


    /**
     * Renders this component to the DOM.
     *
     * @since 1.0.0
     * @return {*}
     */
    render() {
        return (
            <div className="clef-dataset">
                {this.displayDatasetSelect()}
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        cboxes: state.checkboxes,
        selected: state.datasetsSelected
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        select: function ( dset ) {
            dispatch( addSelectedDataset( dset ) );
        },
        deselect: function ( dset ) {
            dispatch( removeSelectedDataset( dset ) );
        },
        popCheckbox: function ( checkbox ) {
            dispatch( removeCheckbox( checkbox ) );
        },
        pushCheckbox: function ( checkbox ) {
            dispatch ( addCheckbox( checkbox ) );
        },
        changeCheckbox: function ( checkbox ) {
            dispatch( changeCheckboxState( checkbox ) );
        }
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( Dataset );