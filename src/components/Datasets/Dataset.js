import React from 'react';
import {connect} from 'react-redux';
import {addSelectedDataset, removeSelectedDataset} from "../../actions/ClefActions";

/**
 * Class to display a single dataset of symbolic music data.
 *
 * @since 1.0.0
 */
class Dataset extends React.Component {

    constructor( props ) {
        super( props );

        this.displayDatasetSelect.bind( this );

    }

    /**
     * Gets the HTML to display the checkbox that allows this Dataset to be selected by the user.
     *
     * @since 1.0.0
     * @return {*}
     */
    displayDatasetSelect() {
        return (
            <div>
                <input type="checkbox" />
                <label>{this.props.dset.displayName}</label>
            </div>
        );
    }


    /**
     * Renders this component to the DOM.
     *
     * @since 1.0.0
     * @return {*}
     */
    render() {
        return (
            <div>

            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
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
        }
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( Dataset );