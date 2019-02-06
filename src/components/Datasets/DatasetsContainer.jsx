import React from 'react';
import {connect} from 'react-redux';
import {getDatasets} from "../../actions/ClefActions";
import Dataset from './Dataset';

/**
 * Class to handle display of datasets available for searching.
 *
 * @since 1.0.0
 */
class DatasetsContainer extends React.Component {

    constructor( props ) {
        super( props );

        this.displayDatasets.bind( this );
    }


    /**
     * Fires after the initial render of this component in the DOM.
     *
     * @since 1.0.0
     */
    componentDidMount() {
        // Get available datasets by calling out to the Clef API.
        this.props.fetchDatasets();
    }


    /**
     * Gets the HTML to display datasets available for searching.
     *
     * @since 1.0.0
     * @return {Array}
     */
    displayDatasets() {
        let dsets = [];
        if ( Array.isArray( this.props.datasets ) && this.props.datasets.length > 0 ) {
            this.props.datasets.map( function ( dataset, i ) {
                dsets.push( <Dataset key={i} dset={dataset} position={i} /> );
            });
        }
        return dsets;
    }


    /**
     * Renders this component to the DOM.
     *
     * @since 1.0.0
     * @return {*}
     */
    render() {
        return (
            <div id="clef-datasets">
                <h3>Datasets</h3>
                {this.displayDatasets()}
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        datasets: state.datasets
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        fetchDatasets: function () {
            dispatch( getDatasets() );
        }
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( DatasetsContainer );
