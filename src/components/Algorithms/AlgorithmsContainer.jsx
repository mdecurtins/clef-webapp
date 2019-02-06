import React from 'react';
import {connect} from 'react-redux';
import {getAlgorithms} from "../../actions/ClefActions";
import Algorithm from './Algorithm';
import './AlgorithmsStyles.css';

/**
 * Class to fetch and display available music information retrieval algorithms.
 *
 * @since 1.0.0
 */
class AlgorithmsContainer extends React.Component {

    constructor( props ) {
        super( props );

        // Bind instance methods.
        this.componentDidMount.bind( this );
        this.displayAlgorithms.bind( this );
    }


    /**
     * Fires after the initial render of the component to the DOM.
     *
     * @since 1.0.0
     */
    componentDidMount() {
        // Get the available algorithms by calling out to the Clef API.
        this.props.fetchAlgorithms();
    }


    /**
     * Gets the HTML for displaying the algorithms returned from the Clef API /algorithms endpoint.
     *
     * @since 1.0.0
     * @return {Array} an array of Algorithm components
     */
    displayAlgorithms() {
        let algorithms = [];
        if ( Array.isArray( this.props.algorithms ) && this.props.algorithms.length > 0 ) {
            this.props.algorithms.map( function ( alg, i ) {
                algorithms.push( <Algorithm key={i} alg={alg} position={i} /> );
            });
        }
        return algorithms;
    }


    /**
     * Renders this component to the DOM.
     *
     * @since 1.0.0
     * @return {*}
     */
    render() {
        return (
            <div id="clef-algorithms">
                <h3>Algorithms</h3>
                {this.displayAlgorithms()}
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        algorithms: state.algorithms
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        fetchAlgorithms: function () {
            dispatch( getAlgorithms() );
        }
    };
}


export default connect ( mapStateToProps, mapDispatchToProps )( AlgorithmsContainer );